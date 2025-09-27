import { useNavigate } from "react-router-dom";

export const useNav = () => {
  const navigate = useNavigate();

  const goToLanding = () => {
    navigate("/");
  };

  const goToFormat = () => {
    navigate("/format");
  };

  const goToATS = () => {
    
    navigate(`/AtsForm`);
  };


  const goToVisual = () => {
    
    navigate(`/VisualForm`);
  };
  const goToResult = (resumeData) => {
    navigate("/result", { state: { resumeData } });
  };

  return { goToLanding, goToFormat, goToATS,goToVisual, goToResult };
};
