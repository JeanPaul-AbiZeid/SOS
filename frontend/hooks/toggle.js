import React from "react";

//Hook to toggle password visibility
export const toggle = () => {
    const [passwordVisibility, setPasswordVisibility] = React.useState(true);
    const [rightIcon, setRightIcon] = React.useState('eye');
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };
  
    return {
      passwordVisibility,
      rightIcon,
      handlePasswordVisibility
    };
  };