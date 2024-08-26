import ReactDOM from 'react-dom/client'
// import './style.css' //we can also import css file here like this

let root = ReactDOM.createRoot(document.getElementById('root'))




function card(key, title, price,img) {
    // console.log(key);
    return (
        <div className='card' key={key}>
            <img src={img} alt="cat" />
            <h2>{title}</h2>
            <h3>${price}</h3>
        </div>
    )
}


fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
        const container2 = data.products.map((ele) => {
            console.log(ele.images[0]);
            return card(ele.id, ele.title, ele.price, ele.images[0])//here we need to maintaine (order, id, price, images).But in our next lecture we were stuided about React_Components where we don`t have to worries about about order
        })
        // console.log(container2)
        root.render(<div className='container'>{container2}</div>)
    })

