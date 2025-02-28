const styles = {
  box: {
    display: "flex",
    alignItems: "center",
    gap: "0px",
    border: "1px solid rgba(0, 0, 0, 0.3)",
    borderRadius: "5px",
  },
  input: {
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    position: "relative",
    width: "180px", // Default width for desktop
    borderRadius: "5px",
    height: "50px",
    color: "rgba(0, 0, 0, 0.8)",
    backgroundColor: "#cecfe8",
  },
  "@media (max-width: 768px)": {
    input: {
      width: "180px", // Reduced width for mobile devices
    },
  },
};

export default styles;
