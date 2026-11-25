
import "./globals.css";

export const metadata = {
  title: "Noodle House | ร้านบะหมี่ออนไลน์",
  description: "เลือกซื้อบะหมี่กึ่งสำเร็จรูป ส่งตรงถึงบ้าน",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
