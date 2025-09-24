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
    // ab format URL param me jayega
    navigate(`/form/${format}`);
  };

  const goToResult = (resumeData) => {
    navigate("/result", { state: { resumeData } });
  };

  return { goToLanding, goToFormat, goToForm, goToResult };
};
