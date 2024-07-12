// // "use client";
// // import { useState } from 'react';
// // import Card from '@/app/Card';

// const Home: React.FC = () => {
//   // const [activeCard, setActiveCard] = useState<number | null>(null);

//   // const handleHover = (id: number) => {
//   //   setActiveCard(id);
//   //   setTimeout(() => setActiveCard(null), 150000); // Reset after 3 seconds
//   // };

//   return (
//     <>
//       {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {[1, 2, 3, 4].map((id) => (
//         <Card key={id} id={id} onHover={handleHover} isBouncing={activeCard !== null && activeCard !== id} />
//       ))}
//     </div> */}
//       <div>
//         <p>Business API Documentation</p>
//         <p>Introduction</p>
//         <p>
//           This document provides a simplified guide on how to make API calls to
//           the KYC Avatar Business API. This guide includes examples in Node.js,
//           Golang, PHP, and Java, and is designed for non-technical or minimally
//           technical users.
//         </p>
//         <p>
//           Please note that the Business can integrate this API to request for
//           KYC verification of their customers and Fetch the Status of the
//           Request. This documentation includes two APIs, one for requesting KYC
//           (Know Your Customer) and another for fetching the KYC status of the
//           user.
//         </p>
//         <p>Detailed KYC Workflow via API</p>
//         <p>
//           1. Initiating KYC Request - The process starts when a business user
//           sends a request to the KYC API. The request includes the
//           customer&#39;s name, email, and an API key for authentication. This
//           step ensures that only authorized requests are processed.
//         </p>
//         <p>
//           2. Email Notification to Customer - Upon receiving the request, the
//           KYC API sends an email to the customer (KYC user). This email contains
//           login details that direct the customer to the KYC platform. The email
//           serves as an initial point of contact and guides the customer to the
//           next steps.
//         </p>
//         <p>
//           3. Customer Login and KYC Platform Access - The customer follows the
//           instructions in the email to log in to the KYC platform. Once logged
//           in, the customer is directed to fill in required personal details and
//           complete the video KYC process.
//         </p>
//         <p>
//           4. Completion of Video KYC - After the customer completes the video
//           KYC, the KYC platform updates the status to indicate that the process
//           is complete. This status change is crucial for the next steps in the
//           workflow.
//         </p>
//         <p>
//           5. Fetching KYC Status - The business needs to check the KYC status to
//           proceed with further action. This is done using the Fetch KYC Status
//           API, which only works after the video KYC is completed. This API call
//           retrieves the status of the KYC process.
//         </p>
//         <p>
//           6. Automated Status Checks - To avoid manual checks, a cron job or
//           scheduler can be set up. The scheduler periodically calls (every hour
//           or every 6 hours or as required) the Fetch KYC Status API to check for
//           updates. It retrieves the latest KYC status and stores the results in
//           a database. This automation ensures that the business has up-to-date
//           information without manual intervention.
//         </p>
//         <p>Getting Your API Key</p>
//         <p>
//           To make API requests, you need an API key. Follow these steps to
//           obtain and use your API key:
//         </p>
//         <p>1. Visit https://kycavatar.com</p>
//         <p>
//           2. Log in to your account or create a new business account if you
//           don&#39;t have one.
//         </p>
//         <p>3. Navigate to the API section through the sidebar.</p>
//         <p>
//           4. You will see two modes: Sandbox and Production. The Sandbox mode is
//           for testing purposes, while the Production mode is for live
//           operations.
//         </p>
//         <p>5. Switch to Production mode to get your production API key.</p>
//         <p>6. Copy the API key provided.</p>
//         <p>Using Your API Key</p>
//         <p>
//           Once you have your API key, include it in your API requests as shown
//           in the examples below. The API key is a required parameter for
//           authenticating your requests.
//         </p>
//         <p>API Information</p>
//         <p>Base URL: https://api.kycavatar.com</p>
//         <p>API Version: 1.0.0</p>
//         <p>Request KYC</p>
//         <p>This endpoint allows you to request KYC verification.</p>
//         <p>Endpoint</p>
//         <p>POST /api/v1/business-api/request-kyc</p>
//         <p>Parameters</p>
//         <p>- name (string): The name of the user. (required)</p>
//         <p>- email (string): The email of the user. (required)</p>
//         <p>- apiKey (string): Your API key. (required)</p>
//         <p>- addressOptOut (boolean): True for addressOptOut (required)</p>
//         <p>Response</p>
//         <p>- status (string): The status of the request. #Accepted or Failed</p>
//         <p>
//           - message (string): A message about the request. #Message Say Failed
//           due to Balance
//         </p>
//         <p>
//           - kyc_id (string): The ID of the KYC request. #Store in DB for Further
//           Requestes
//         </p>
//         <p>Examples</p>
//         <p>Node.js</p>
//         {/* <code>
//           javascript
//           const axios = require('axios');

//           axios.post('https://api.kycavatar.com/api/v1/business-api/request-kyc', {
//             name: 'John Doe',
//             email: 'john.doe@example.com',
//             apiKey: 'your_api_key',
//             addressOptOut: true/false
//           })
//           .then(response => {
//             console.log(response.data);
//           })
//           .catch(error => {
//             console.error(error);
//           });
//         </code> */}
//         <p>Golang</p>
//         {/* <code>
//         go
// package main

// import (
//   "bytes"
//   "encoding/json"
//   "fmt"
//   "net/http"
// )

// func main() {
//   url := "https://api.kycavatar.com/api/v1/business-api/request-kyc"
//   requestBody, _ := json.Marshal(map[string]string{
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "apiKey": "your_api_key",
//     “addressOptOut”: true/false
//   })

//   resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
//   if err != nil {
//     fmt.Println("Error:", err)
//   }
//   defer resp.Body.Close()

//   var result map[string]interface{}
//   json.NewDecoder(resp.Body).Decode(&result)
//   fmt.Println(result)
// }

//         </code> */}
//         <p>PHP</p>
//         {/* <code>
//         php
// <?php

// $curl = curl_init();

// curl_setopt_array($curl, array(
//   CURLOPT_URL => 'https://api.kycavatar.com/api/v1/business-api/request-kyc',
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => '',
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 0,
//   CURLOPT_FOLLOWLOCATION => true,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => 'POST',
//   CURLOPT_POSTFIELDS =>'{
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "apiKey": "your_api_key",
//     “addressOptOut”: true/false
// }',
//   CURLOPT_HTTPHEADER => array(
//     'Content-Type: application/json'
//   ),
// ));

// $response = curl_exec($curl);

// curl_close($curl);
// echo $response;

//         </code> */}
//         <p>Java</p>
//         {/* <code>
//         java
// import java.io.OutputStream;
// import java.net.HttpURLConnection;
// import java.net.URL;
// import java.nio.charset.StandardCharsets;

// public class Main {
//   public static void main(String[] args) {
//     try {
//       URL url = new URL("https://api.kycavatar.com/api/v1/business-api/request-kyc");
//       HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//       conn.setRequestMethod("POST");
//       conn.setRequestProperty("Content-Type", "application/json; utf-8");
//       conn.setRequestProperty("Accept", "application/json");
//       conn.setDoOutput(true);

//       String jsonInputString = "{"name": "John Doe", "email": "john.doe@example.com", "apiKey": "your_api_key", “addressOptOut”: true/false}";

//       try(OutputStream os = conn.getOutputStream()) {
//         byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
//         os.write(input, 0, input.length);
//       }

//       int code = conn.getResponseCode();
//       System.out.println("Response code: " + code);
//     } catch (Exception e) {
//       e.printStackTrace();
//     }
//   }
// }

//         </code> */}
//         <p>Fetch KYC Status</p>
//         <p>This endpoint allows you to fetch the status of a KYC request.</p>
//         <p>Endpoint</p>
//         <p>POST /api/v1/business-api/kyc-status</p>
//         <p>Parameters</p>
//         <p>- kyc_id (string): The ID of the KYC request.</p>
//         <p>- apiKey (string): Your API key.</p>
//         <p>Response</p>
//         <p>- status (string): The status of the request.  #KYC is Pending or Completed</p>
//         <p>- kyc_verified (boolean): Whether the KYC was verified. #KYC is accepted or Rejected</p>
//         <p>- scores (object): Additional scores related to the KYC verification.</p>
//         <p>-- document_score (number): Document verification score out of 100. </p>
//         <p>-- liveliness_score (number): Liveliness verification score out of 100.</p>
//         <p>-- address_score (number): Address verification score out of 100.</p>
//         <p>Examples</p>
//         <p>Node.js</p>
//         {/* <code>
//         javascript
// const axios = require('axios');

// axios.post('https://api.kycavatar.com/api/v1/business-api/kyc-status', {
//   kyc_id: 'your_kyc_id',
//   apiKey: 'your_api_key'
// })
// .then(response => {
//   console.log(response.data);
// })
// .catch(error => {
//   console.error(error);
// });

//         </code> */}
//         <p>Golang</p>
//         {/* <code>
//         go
// package main

// import (
//   "bytes"
//   "encoding/json"
//   "fmt"
//   "net/http"
// )

// func main() {
//   url := "https://api.kycavatar.com/api/v1/business-api/kyc-status"
//   requestBody, _ := json.Marshal(map[string]string{
//     "kyc_id": "your_kyc_id",
//     "apiKey": "your_api_key",
//   })

//   resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
//   if err != nil {
//     fmt.Println("Error:", err)
//   }
//   defer resp.Body.Close()

//   var result map[string]interface{}
//   json.NewDecoder(resp.Body).Decode(&result)
//   fmt.Println(result)
// }

//         </code> */}
//         <p>PHP</p>
//         {/* <code>
//         php
// <?php

// $curl = curl_init();

// curl_setopt_array($curl, array(
//   CURLOPT_URL => 'https://api.kycavatar.com/api/v1/business-api/kyc-status',
//   CURLOPT_RETURNTRANSFER => true,
//   CURLOPT_ENCODING => '',
//   CURLOPT_MAXREDIRS => 10,
//   CURLOPT_TIMEOUT => 0,
//   CURLOPT_FOLLOWLOCATION => true,
//   CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
//   CURLOPT_CUSTOMREQUEST => 'POST',
//   CURLOPT_POSTFIELDS =>'{
//     "kyc_id": "your_kyc_id",
//     "apiKey": "your_api_key"
// }',
//   CURLOPT_HTTPHEADER => array(
//     'Content-Type: application/json'
//   ),
// ));

// $response = curl_exec($curl);

// curl_close($curl);
// echo $response;

//         </code> */}
//         <p>Java</p>
//         {/* <code>
//         java
// import java.io.OutputStream;
// import java.net.HttpURLConnection;
// import java.net.URL;
// import java.nio.charset.StandardCharsets;

// public class Main {
//   public static void main(String[] args) {
//     try {
//       URL url = new URL("https://api.kycavatar.com/api/v1/business-api/kyc-status");
//       HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//       conn.setRequestMethod("POST");
//       conn.setRequestProperty("Content-Type", "application/json; utf-8");
//       conn.setRequestProperty("Accept", "application/json");
//       conn.setDoOutput(true);

//       String jsonInputString = "{"kyc_id": "your_kyc_id", "apiKey": "your_api_key"}";

//       try(OutputStream os = conn.getOutputStream()) {
//         byte[] input = jsonInputString.getBytes(StandardCharsets.UTF_8);
//         os.write(input, 0, input.length);
//       }

//       int code = conn.getResponseCode();
//       System.out.println("Response code: " + code);
//     } catch (Exception e) {
//       e.printStackTrace();
//     }
//   }
// }

//         </code> */}
//       </div>
//     </>
//   );
// };

// export default Home;

import React from 'react'
import PicYourPerPic from './components/PicYourPerPic'
import OurAddOn from './components/OurAddOn'
// import Table from './components/Table';

const page = () => {
  return (
    <div>
      {/* <Table /> */}
      <PicYourPerPic />
      <OurAddOn />
    </div>
  )
}

export default page

