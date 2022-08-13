interface Props {
    icon: JSX.Element | JSX.Element[];
    text: string;
}

function SidenavIcon(props: Props) {
    const {icon, text} = props;
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
        </div>
    )
}

export default SidenavIcon;
