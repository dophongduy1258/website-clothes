import React,{Component} from 'react'
import Header from './Header'
import NavMenu from './NavMenu'
import Banner from './Banner'
import Note from './Note'
import Card from './Card'
import Pagination from './Pagination'
import Sale from './Sale'
import Footer from './Footer'



export default function Home(){
    return (
      <>
        <div className="site-wrap">
              <Banner/>
              <Note/>
              <Card/>
              <Pagination/>
              <Sale/>
          </div>
      </>
  );
  }

