
export const Contact = ({contact:{name, number, id}, onDeleteContact}) => {
       return (
        <>
        <p>{name}:</p>
        <p>{number}</p>
        <button type="button" onClick={() => {onDeleteContact(id)}}>Delete</button>
        </>
    )
}