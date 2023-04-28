export interface Props {
    enableInspectVSCode?: boolean;
}

export default function Navbar({ title }: Props) {
    return(
        <div>
            <h1>{title}</h1>
            <p>Example Text</p>
        </div>
    );
}
