import React, {useState} from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()


    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input!!",
                message: "Plese enter e valid name and age!!"
            });
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: "!nvalid age!!",
                message: "Please enter a valid age"
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('')
    }

    const changeUsernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const changeAgeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input id='username' type='text' value={enteredUsername} onChange={changeUsernameHandler} />

                    <label htmlFor='username'>Age (Years)</label>
                    <input id='age' type='number' value={enteredAge} onChange={changeAgeHandler} />

                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser