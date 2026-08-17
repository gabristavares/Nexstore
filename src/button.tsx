interface ButtonProps {
    props: string;
}

export function Button({props}: ButtonProps ) {

    return (
        <>
            <h1>Esse botão pode ser alterado!</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {props}
            </button>
        </>
    )
}