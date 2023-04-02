import { toast } from "react-hot-toast";

// use local storage to manage cart data
const addToDb = user => {

    let userArray = [];

    const storedUsers = JSON.parse(localStorage.getItem('User'));

    if (storedUsers) {

        const selectedUser = storedUsers.find(storedUser => storedUser.id === user.id);

        if (selectedUser) {
            toast.error('already booked');
            // const newStoredUsers = storedUsers.filter(storedUser => storedUser.id !== selectedUser.id);
            // selectedUser.quantity = selectedUser.quantity + 1;
            // const users = [...newStoredUsers, selectedUser];
            // localStorage.setItem('User', JSON.stringify(users));
            // toast.success('book done');
        } else {
            user.quantity = 1;
            const users = [...storedUsers, user];
            localStorage.setItem('User', JSON.stringify(users));
            toast.success('book done');
        }

    }
    else {
        user.quantity = 1;
        userArray.push(user);
        localStorage.setItem('User', JSON.stringify(userArray));
        toast.success('book done');
    }
};


const increaseQuantity = (id) => {
    const storedUsers = JSON.parse(localStorage.getItem('User'));

    const selectedUser = storedUsers.find(storedUser => storedUser.id === id);

    const newStoredUsers = storedUsers.filter(storedUser => storedUser.id !== selectedUser.id);
    let quantity = selectedUser.quantity = selectedUser.quantity + 1;
    const users = [...newStoredUsers, selectedUser];
    localStorage.setItem('User', JSON.stringify(users));

    return quantity;
};



export {
    addToDb,
    increaseQuantity,

};