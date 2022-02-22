import React, { useContext, useEffect, useState } from 'react'


const url = 'https://comfy-sloth-api.herokuapp.com/api/products'
const AppContext = React.createContext()



function getCartValues(){
    const storedValues = localStorage.getItem('myCartItems')
    if(!storedValues) return []
    else{
        return JSON.parse(storedValues)
    }
}



const AppProvider = ({ children }) => {
    const [loading, SetLoading] = useState(true)
    const [cart, SetCart] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm ] = useState('')
    const [searchResult, setsearchResult] = useState([])
    const [Featured, SetFeatured] = useState([])
    const [mainData, SetmainData] = useState([])
    const [productcart, setProductCart] = useState(getCartValues())

    //cartitems
    const [total, setTotal] = useState(0)
    const [price, setAmount] = useState(0)

    const decrease=()=>{}

    const remove=()=>{}

    const increase=(product)=>{
        const exist = productcart.find((x)=>x._id === product._id)
        if(exist){
            setProductCart(
                productcart.map((x)=>
                    x._id === product._id ? { ...exist, amount: exist.amount + 1 } : x
                )
            )
        }else{
            setProductCart([...productcart, {...product, amount: 1}])
        }
    }

    //toggle hamburgerpage
    const ToggleIsOpen=()=>{
        setIsOpen(!isOpen)
    }
    


    //add to cart
    const addTocart=(id)=>{
        const myCart = cart.filter((furniture)=>furniture._id === id)[0]
        if(productcart.includes(myCart) === false) { productcart.push(myCart) }
        localStorage.setItem('myCartItems', JSON.stringify(productcart))
    }


    const fetchData=async()=>{
        SetLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            if(data){
                SetCart(data)
                SetmainData(data)
            }else{
                SetCart([])
            }
            SetLoading(false)
        } catch (error) {
            console.warn(error)
            SetLoading(false)
        }
    }

    const GetFeatured = async ()=>{
        let featuredlist = await cart.filter((obj)=>{
            return obj.featured
        })
        SetFeatured(featuredlist)
    }

    const searchFurniture = async(searchTerm)=>{
        setSearchTerm(searchTerm) 
        if(searchTerm !== ""){
            const newFurniture = cart.filter((furnitures)=>{
                return Object.values(furnitures)
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            })
            setsearchResult(newFurniture)
        }
        else{
            setsearchResult(cart)
        }
    }

    const filteredResults = searchTerm.length < 1 ? cart : searchResult

    //select butons
    const SelectAll =()=>{
        SetCart(mainData)
    }

    const SelectOffice =()=>{
        let OfficeFilter = cart.filter((obj)=>{
            return obj.category === 'Office'
        })
        SetCart(OfficeFilter)
    }

    const SelectLiving =()=>{
        let LivingFilter = cart.filter((obj)=>{
            return obj.category === 'Living Room'
        })
        SetCart(LivingFilter)
    }

    const SelectKitchen =()=>{
        let KitchenFilter = cart.filter((obj)=>{
            return obj.category === "Kitchen"
        })
        SetCart(KitchenFilter)
    }

    const SelectBedroom =()=>{
        let BedroomFilter = cart.filter((obj)=>{
            return obj.category === "Bedroom"
        })
        SetCart(BedroomFilter)
    }

    const SelectKids =()=>{
        let KidsFilter = cart.filter((obj)=>{
            return obj.category === "Kids"
        })
        SetCart(KidsFilter)
    }


    const SelectDinning =()=>{
        let dinningFilter = cart.filter((obj)=>{
            return obj.category === "Dinning"
        })
        SetCart(dinningFilter)
    }

    const resetButton=()=>{
        SetCart(mainData)
        setSearchTerm('') 
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
        GetFeatured()
    },[cart])


    return (
        <AppContext.Provider
        value={{
            cart,
            ToggleIsOpen,
            isOpen,
            searchFurniture,
            filteredResults,
            GetFeatured,
            Featured, 
            SetFeatured,
            loading,
            SelectAll,
            SelectOffice,
            SelectLiving,
            SelectKitchen,
            SelectBedroom,
            SelectDinning,
            SelectKids,
            resetButton,
            addTocart,
            increase,
            decrease,
            remove,
            price,
            productcart
        }}
        >
        {children}
        </AppContext.Provider>
    )
    }
    // make sure use
    export const useGlobalContext = () => {
    return useContext(AppContext)
    }

export { AppContext, AppProvider }