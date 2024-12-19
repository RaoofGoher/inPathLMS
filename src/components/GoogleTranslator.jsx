import React, { useState } from "react";
import { FaLanguage } from "react-icons/fa"; // Import the translate icon
import axios from "axios"; // Import axios for API calls
import Flag from "react-world-flags"; // Import react-world-flags to display flags
import icon from "../assets/language-icon2.svg";

const GoogleTranslator = () => {
  const [isPopupVisible, setPopupVisible] = useState(false); // Controls popup visibility
  const [selectedLanguage, setSelectedLanguage] = useState(""); // Stores the selected language
  const [translatedContent, setTranslatedContent] = useState(""); // Stores the translated content

  // Function to toggle popup visibility
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  // Function to handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setPopupVisible(false); // Hide the popup after selecting the language
    translatePage(language); // Translate the page content when a language is selected
  };

  // Function to call Google Cloud Translation API
  const translatePage = async (language) => {
    const apiKey = "YOUR_API_KEY"; // Replace with your Google Cloud API key
    const textToTranslate = document.body.innerText; // Get the text content of the page

    try {
      const response = await axios.post(
        `https://cilenisapi.p.rapidapi.com/language_identifier?text=Insert%20here%20the%20text%20to%20be%20analyzed.${apiKey}`,
        {
          q: textToTranslate,
          target: language,
        }
      );

      const translatedText = response.data.data.translations[0].translatedText;
      setTranslatedContent(translatedText); // Update the state with the translated content
      document.body.innerText = translatedText; // Update the page content with the translated text
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  return (
    <div className="relative">
      {/* Button to show the popup */}
      <button
        onClick={togglePopup}
        className="flex justify-center gap-2 items-center  text-white p-2"
      >
        <img src={icon} width={20} alt="language-icon" />
        <span>English</span>
      </button>

      {/* Popup to select language */}
      {isPopupVisible && (
        <>
          {/* Background blur effect */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

          {/* Centered popup */}
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-4 w-[50rem] mt-2">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {/* Language options with Flags */}
                <li
                  onClick={() => handleLanguageSelect("en")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="US" style={{ width: 20, height: 15 }} />{" "}
                  {/* US Flag for English */}
                  <span>English</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("es")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="ES" style={{ width: 20, height: 15 }} />{" "}
                  {/* Spain Flag for Spanish */}
                  <span>Spanish</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("fr")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="FR" style={{ width: 20, height: 15 }} />{" "}
                  {/* France Flag for French */}
                  <span>French</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("de")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="DE" style={{ width: 20, height: 15 }} />{" "}
                  {/* Germany Flag for German */}
                  <span>German</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("it")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="IT" style={{ width: 20, height: 15 }} />{" "}
                  {/* Italy Flag for Italian */}
                  <span>Italian</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("zh")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="CN" style={{ width: 20, height: 15 }} />{" "}
                  {/* China Flag for Chinese */}
                  <span>Chinese</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("ja")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="JP" style={{ width: 20, height: 15 }} />{" "}
                  {/* Japan Flag for Japanese */}
                  <span>Japanese</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("pt")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="PT" style={{ width: 20, height: 15 }} />{" "}
                  {/* Portugal Flag for Portuguese */}
                  <span>Portuguese</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("ar")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="SA" style={{ width: 20, height: 15 }} />{" "}
                  {/* Saudi Arabia Flag for Arabic */}
                  <span>Arabic</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("ru")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="RU" style={{ width: 20, height: 15 }} />{" "}
                  {/* Russia Flag for Russian */}
                  <span>Russian</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("ko")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="KR" style={{ width: 20, height: 15 }} />{" "}
                  {/* Korea Flag for Korean */}
                  <span>Korean</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("hi")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="IN" style={{ width: 20, height: 15 }} />{" "}
                  {/* India Flag for Hindi */}
                  <span>Hindi</span>
                </li>
                <li
                  onClick={() => handleLanguageSelect("bn")}
                  className="cursor-pointer text-primaryColor hover:bg-gray-200 p-2 rounded flex items-center space-x-2"
                >
                  <Flag code="BD" style={{ width: 20, height: 15 }} />{" "}
                  {/* Bangladesh Flag for Bengali */}
                  <span>Bengali</span>
                </li>
                {/* Add more languages and flags as needed */}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GoogleTranslator;
