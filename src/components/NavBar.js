import React from "react";
import { connect } from "react-redux";
import { getAllItemFromCart } from "../data/reducers";
import { Link } from "react-router-dom";
import { store } from "../data/store";

import "../css/NavBar.css";

export class NavTopLeft extends React.Component {
	render() {
		return (
			<ul class="nav-ul-row">
				<li><Link id="nav-men-link" to="/men">Men</Link></li>
				<li><Link id="nav-women-link" to="/women">Women</Link></li>
			</ul>
		);
	}
}

export class NavTopMid extends React.Component {
	render() {
		return (
				<Link class="nav-logo" to="/en-us">
					<img class="nav-logo" id="nav-logo-link" src={"/images/gf_logo.jpg"} alt="GFashion" />
				</Link>
		);
	}

}
class NavTopRightLanguage extends React.Component {
	state = {
		toShow: false
	};
	mouseEnterHandler = () => {this.setState({toShow: true})};
	mouseLeaveHandler = () => {this.setState({toShow: false})};

	render() {
		const menu_className = this.state.toShow ? "header-nav-lan-menu show" : "header-nav-lan-menu hide";
		return (
				<ul class="nav-ul-lan-col">
						<li onMouseEnter={this.mouseEnterHandler.bind(this)} 
							onMouseLeave={this.mouseLeaveHandler.bind(this)}>
							<Link id="nav_language" to="/en-us">English</Link>
						</li>
						<div class={menu_className} onMouseEnter={this.mouseEnterHandler.bind(this)} 
													onMouseLeave={this.mouseLeaveHandler.bind(this)}>
							<li><Link id="nav-menu-zh-cn" to="/zh-cn">中文</Link></li>
						</div>
				</ul>
		);
	}
}

class NavTopRightCart extends React.Component {
	render() {
		const num = this.props.itemNum;
		const text = "Shopping Cart (" + num + ")";
		return (
				<Link to="/cart">{text}</Link>
		);
	}
}

const mapStateToProps = state => {
	return {
		cartItemList: state.cartReducer.cartItemList
	}
};

export class NavTopRight extends React.Component {
	render() {
		const itemNum = this.props.cartItemList.length;
		return (
			<ul class="nav-ul-row">
				<li><NavTopRightLanguage class="header-nav-language"/></li>
				<li><NavTopRightCart class="header-nav-cart" itemNum={itemNum}/></li>
			</ul>	
		);
	}
}

export default connect(mapStateToProps, null)(NavTopRight)
