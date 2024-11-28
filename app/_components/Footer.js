import {
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50 py-4">
      <div className="flex items-center justify-center space-x-6">
        <a
          href="https://t.me/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-50 hover:text-accent-500 transition-colors"
          aria-label="Telegram"
        >
          <i className="text-2xl">
            <FaTelegramPlane />
          </i>
        </a>
        <a
          href="https://www.youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-50 hover:text-accent-500 transition-colors"
          aria-label="Youtube"
        >
          <i className="text-2xl">
            <FaYoutube />
          </i>
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-50 hover:text-accent-500 transition-colors"
          aria-label="Instagram"
        >
          <i className="text-2xl">
            <FaInstagram />
          </i>
        </a>
        <a
          href="https://www.tiktok.com/@yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-50 hover:text-accent-500 transition-colors"
          aria-label="TikTok"
        >
          <i className="text-2xl">
            <FaTiktok />
          </i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
