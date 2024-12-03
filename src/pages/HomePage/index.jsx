import { useRef, useEffect } from "react"
import Banner from "../../components/Banner"
import CategoryList from "../../components/CategoryList"
import DiscountForm from "../../components/DiscountForm"
import { useDispatch } from "react-redux"
import s from './HomePage.module.css'



function HomePage() {

  let saleRef = useRef()
  const dispatch = useDispatch()
  function autoScroll() {
    saleRef.current.scrollIntoView({behavior: 'smooth'})
  }
  useEffect(() => {
    dispatch(fetchTopProductsOnSale())
    document.body.scrollIntoView()
  }) 
  return (
    <main className={s.wrapper}>
      <Banner autoScroll={autoScroll} />
      <CategoryList itemNumber={4} withNav={true} type='categories_list_main'/>
      <DiscountForm/>
    </main>
  )
}

export default HomePage