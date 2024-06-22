import "@/assets/styles/globals.css";
export const metadata = {
  title: "Tachrent | find your perfect Rental",
  description: "Tachrent - Your one-stop-shop for all your rental needs",
  keywords: "rental , find rentals , find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
