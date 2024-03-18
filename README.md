# Scholarly Summary
## Use AI To Summarize apps tailored to you
_Screenshots coming soon, Available for iOS only April 2nd_

## Scholarly Article Search and Summarization with React Native

This Prototype React Native app allows users to explore scholarly articles based on their interests. 

**Features:**

* **Topic-Based Search:**  Enter your topic and the app finds relevant articles on Google Scholar using SerpAPI.
* **Text Summarization:** Leverage the power of Facebook BART to generate concise summaries of complex research articles.
* **AWS Lambda Integration:**  The backend utilizes AWS Lambda for serverless functions, ensuring scalability and efficiency.
* **Feature & Search Term Extraction:** Google Flan T5-XXL Text2Text model helps identify key terms within your topic to refine the search.

**User Experience:**

1.  Provide a topic of interest.
2.  The app searches Google Scholar and retrieves relevant articles.
3.  Each article is summarized by Facebook BART for quick understanding.
4.  Choose to read the full article on Google Scholar if it piques your interest.

**Tech Stack:**

* Frontend: React Native
* Backend: AWS Lambda
* Text Summarization: Facebook BART
* Feature & Search Term Extraction: Google Flan T5-XXL Text2Text
* Google Scholar Search: SerpAPI


