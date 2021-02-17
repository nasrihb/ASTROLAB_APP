import React,{Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css" 
import axios from 'axios'
import CIcon from '@coreui/icons-react'
import './List.css';
import {
 
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CInput,
    CRow,
    CNav,
    CNavbar,
    CNavLink,
    CDataTable

  } from '@coreui/react'
import Modal from './Add_wishlist'
import wishlistsService from '../../services/wishlists.service';

const fields = ['Image','Title', 'Description', 'status','Price']
class ListWish extends Component{
  constructor(props) {
    super(props);
    this.retrievewishlists = this.retrievewishlists.bind(this);
    this.setActivewishlist = this.setActivewishlist.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.state = { show : false,
      ListData: {},
      currentwishlist:null,
      currentIndex:-1
    }; 
}

toggleModal() {
  this.setState({ show: !this.state.show })
}
componentDidMount() {
  this.retrievewishlists();
}
refreshList() {
  this.retrievewishlists();
  this.setState({
    currentwishlist: null,
    currentIndex: -1
  });
}
 
retrievewishlists() {
  wishlistsService.GetWishlist()
    .then(response => {
      this.setState({
        ListData: response.data
      });
      console.log(JSON.stringify(response.data))
    })
    .catch(e => {
      console.log(e);
    });
}
refreshList() {
  this.retrievewishlists();
  this.setState({
    currentwishlist: null,
    currentIndex: -1
  });
}
setActivewishlist(wish, index) {
  this.setState({
    currentwishlist: wish,
    currentIndex: index
  });
}
render(){
    const {ListData , currentIndex } = this.state;

        return(
            <>
      <CRow>
      <CCol xs="3">
          <CCard>
            <CCardHeader>
            <CCol col="2" className="text-center mt-3">
            <CButton block shape="pill" color="light" size="lg"  onClick={this.toggleModal.bind(this)} ><CIcon name="cil-plus" size={'xl'} />&nbsp;&nbsp;Add Wishlist</CButton></CCol>
            <Modal show={this.state.show} toggleModal={this.toggleModal}/>
            </CCardHeader>
            <CCardBody>
              <CNav vertical>
              { 
              Object.keys(ListData).map((wishlist, index) => (
                <CNavLink className={"nav-item"+(index === currentIndex ? "active" : "")}   onClick={() => this.setActivewishlist(wishlist, index)} key={index}>  {wishlist}</CNavLink> ))}
              </CNav>
            </CCardBody>
          </CCard>
        </CCol> 
        <CCol>
          <CCard>
            <CCardHeader>
             Wishlist 
             <div className="card-header-actions">
             <CButton size="sm" className={'float-right btn-vk btn-brand mr-1 mb-1'} color="light" ><CIcon size="lg" name="cil-trash"></CIcon>&nbsp;<span className="mfs-2">Delete</span> </CButton>

               <CButton size="sm" className={'float-right btn-vk btn-brand mr-1 mb-1'} color="light" ><CIcon size="lg" name="cil-pencil"></CIcon>&nbsp;<span className="mfs-2">Edit</span> </CButton>

             </div>
            </CCardHeader>
            <CCardBody>
              <CRow>
             
              
        <CCol >

              <CNavbar light color="light" className="shadow-sm">
                <CNav  variant="tabs" >
                <CNavLink active>To Buy</CNavLink>
                <CNavLink>Brought</CNavLink>
                </CNav>
                <div className="card-header-actions">
                <CButton color="light" className="my-2 my-sm-0" > <CIcon name="cil-grid"></CIcon>&nbsp;Grid</CButton>
                <CButton color="light" className="my-2 my-sm-0" > <CIcon name="cil-list"></CIcon>&nbsp;List</CButton>

                </div>



              </CNavbar>
             
        </CCol>
      
         
                  </CRow>

                  <CRow className="mt-5">
                    <CCol>
                    <CDataTable 
              items={''}
              fields={fields}
              size="lg"
              itemsPerPage={5}
              pagination
              
            />
                    </CCol>
                 
                  </CRow>
                  </CCardBody>
                  </CCard>
                 </CCol> 
                


      </CRow>
    </>
            
        )
    }
}
export default ListWish