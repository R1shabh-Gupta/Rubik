from flask import Flask, jsonify, request
import google.generativeai as genai
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_KEY = URLSCAN_API_KEY
genai.configure(api_key=LLM_API_KEY)


@app.route('/api/domain-search', methods=['GET'])
def domain_search():
    domain = request.args.get('domain')
    if not domain:
        return jsonify({"error": "No domain provided"}), 400

    urlscan_url = f'https://urlscan.io/api/v1/search/?q=domain:{domain}'
    headers = {
        'API-Key': API_KEY,
        'Content-Type': 'application/json'
    }

    try:
        response = requests.get(urlscan_url, headers=headers)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.exceptions.HTTPError as err:
        return jsonify({"error": f"HTTP Error: {str(err)}"}), response.status_code
    except requests.exceptions.RequestException as e:
        return jsonify({"error": "A network error occurred", "details": str(e)}), 500
    
@app.route('/api/advance-domain-search', methods=['GET'])
def advance_domain_search():
    domain = request.args.get('resultURL')
    if not domain:
        return jsonify({"error": "No domain provided"}), 400

    headers = {
        'API-Key': API_KEY,
        'Content-Type': 'application/json'
    }

    try:
        response = requests.get(domain, headers=headers)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.exceptions.HTTPError as err:
        return jsonify({"error": f"HTTP Error: {str(err)}"}), response.status_code
    except requests.exceptions.RequestException as e:
        return jsonify({"error": "A network error occurred", "details": str(e)}), 500
    

@app.route('/api/takedown', methods=['GET'])
def takedown():
    infringing_content = request.args.get('infringingContent')
    brand_content = request.args.get('brandContent')
    selected_reason = request.args.get('selectedReason')
    detailed_description = request.args.get('detailedDescription')

    print(f"Infringing Content: {infringing_content}")
    print(f"Brand Content: {brand_content}")
    print(f"Selected Reason: {selected_reason}")
    print(f"Detailed Description: {detailed_description}")

    model = genai.GenerativeModel('gemini-1.5-flash')
    response = model.generate_content(f"""
        Task:

        1. Review the following details provided:
           - Infringing Content: {infringing_content}
           - Brand Content: {brand_content}
           - Reason for Infringement: {selected_reason}
           - Detailed Description: {detailed_description}
        
        2. Generate a formal Takedown Notice using the provided information.
        
        Your response must be in the following format and should not include any other information. If insufficient information is provided, then generate a generalised response. ONLY GENERATE A NOTICE, NO CROSS QUESTIONING:
        
          - Takedown Notice:
            [notice_body]
        
        Your response:
        """)
    
    print(response.text)

    response_data = {
        "notice": response.text
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
