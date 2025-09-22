// navigate.js
import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();

  const goToLanding = () => {
    navigate("/");
  };

  const goToFormat = () => {
    navigate("/format");
  };

  const goToForm = (format) => {
    // pass format state
    navigate("/form", { state: { format } });
  };

  const goToResult = (resumeData) => {
    // passing the generated resume data to result page
    navigate("/result", { state: { resumeData } });
  };

  return { goToLanding, goToFormat, goToForm, goToResult };
};
