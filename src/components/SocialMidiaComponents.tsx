import { Instagram, Facebook, Twitter } from "lucide-react";

export function SocialMediaComponents() {
  return (
    <ul className="flex gap-2">
      <li>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          title="@hamburgueriavegana"
          target="_blank"
          rel="external"
          className="hover:text-green-400 transition duration-200"
        >
          <Instagram />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          title="/hamburgueriavegana"
          target="_blank"
          rel="external"
          className="hover:text-green-400 transition duration-200"
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          title="@hamburgueriveg"
          target="_blank"
          rel="external"
          className="hover:text-green-400 transition duration-200"
        >
          <Twitter />
        </a>
      </li>
    </ul>
  );
}
