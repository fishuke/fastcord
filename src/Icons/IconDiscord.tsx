import discordLogo from './../assets/icon_discord.svg';

function SvgIconDiscord({ tailwindProps, alt }) {
  return <img src={discordLogo} alt={alt} className={tailwindProps} />;
}

export default SvgIconDiscord;
