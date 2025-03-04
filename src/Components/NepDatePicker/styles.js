const styles = {
  box: {
    display: "flex",
    alignItems: "center",
    gap: "0px",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
  },

  input: {
    flex: 1,
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    position: "relative",
    width: "180px", // Default width for desktop
    borderRadius: "5px",
    height: "50px",
    color: "rgba(0, 0, 0, 0.8)",
    backgroundColor: "#ffffff",
  },
  "@media (max-width: 768px)": {
    input: {
      width: "180px", // Reduced width for mobile devices
      height: "10px",
    },
  },
};

export default styles;
