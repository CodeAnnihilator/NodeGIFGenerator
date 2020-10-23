import React from 'react';

import viewImg from 'assets/icons/view.svg';
import commentImg from 'assets/icons/comment.svg';
import starImg from 'assets/icons/star.svg';
import priceTagImg from 'assets/icons/price-tag.svg';

import gifImg from 'assets/icons/gif.svg';

import filmStripImg from 'assets/icons/film-strip.svg';
import selectionImg from 'assets/icons/selection.svg';

import styles from './samples.module.scss';

import 'index.css';

function App() {
  console.log(styles)
  return (
	<div className={styles.container}>
		<Header />
		<Footage />
		<div className={styles.cardsContainer}>
			<Card img='https://i.guim.co.uk/img/media/a3c4d3a24efd7d6de6d2f6c64a29df7a9eebaa25/0_0_4256_2554/master/4256.jpg?width=1200&quality=85&auto=format&fit=max&s=9e6e58441c9714d0784440b90f819303' />
			<Card img='https://miro.medium.com/max/8256/1*5lpiSFo6j5dhrr6Z6RFd8Q.jpeg' />
			<Card img='https://www.rwongphoto.com/images/xl/RW9883_web.jpg' />
			<Card img='https://storage.googleapis.com/planet4-international-stateless/2017/11/GP0STOE2U.jpg' />
			<Card img='https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/319/319970/butterfly-on-red-flower.jpg?w=1155&h=1541' />
			<Card img='https://www.frutaromnatural.com/FrutaromHealth/UploadFiles/pgallery/201752114453088.jpg' />
			<Card img='https://www.nps.gov/articles/images/CANY_RockCairn_NPS_NealHerbert.jpg?maxwidth=1200&autorotate=false' />
			<Card img='https://www.bmw.co.uk/content/dam/bmw/marketGB/bmw_co_uk/bmw-cars/x-models/iX3/2020/Highlights/ix3-premier-edition-highlights-dt-1680x756.jpg.asset.1599180373468.jpg' />
			<Card img='https://images.unsplash.com/photo-1550147760-44c9966d6bc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' />
			<Card img='https://picjumbo.com/wp-content/uploads/leaf-leaves-background-free-photo-DSC04946-2210x1473.jpg' />
			<Card img='https://i.guim.co.uk/img/media/a3c4d3a24efd7d6de6d2f6c64a29df7a9eebaa25/0_0_4256_2554/master/4256.jpg?width=1200&quality=85&auto=format&fit=max&s=9e6e58441c9714d0784440b90f819303' />
			<Card img='https://miro.medium.com/max/8256/1*5lpiSFo6j5dhrr6Z6RFd8Q.jpeg' />
		</div>
	</div>
  );
}

export default App;

const Card = ({
	img
}: any) => {

  return (
	<div className={styles.card}>
		<div className={styles.textOverlay}>
			<div className={styles.avatarContainer}>
				<div className={styles.avatarCircle}>AA</div>
				<div className={styles.userText}>user</div>
				<h1 className={styles.templateTitle}>some title of this template</h1>
				<h3 className={styles.templateDesc}>nice description is right here</h3>
			</div>
			<div className={styles.buttonsContainer}>
				<div className={styles.buttonFootage}>
					<img alt='' className={styles.buttonImage} src={filmStripImg} />
					<div>footage</div>
				</div>
				<div className={styles.buttonExplore}>
					<img alt='' className={styles.buttonImage} src={selectionImg} />
					<div>explore</div>
				</div>
			</div>
			<div className={styles.statsContainer}>
				<div className={styles.iconContainer}>
					<img alt='' className={styles.icon} src={viewImg} />
					<div className={styles.iconText}>587</div>
				</div>
				<div className={styles.iconContainer}>
					<img alt='' className={styles.icon} src={commentImg} />
					<div className={styles.iconText}>15</div>
				</div>
				<div className={styles.iconContainer}>
					<img alt='' className={styles.icon} src={starImg} />
					<div className={styles.iconText}>209</div>
				</div>
				<div className={styles.iconContainer}>
					<img alt='' className={styles.icon} src={priceTagImg} />
					<div className={styles.iconText}>$0.15</div>
				</div>
			</div>
		</div>
		<div className={styles.cardImg} style={{backgroundImage: `url(${img})`}} />
	</div>
  )

}

const Header = () => (
	<div className={styles.headerContainer}>
		<div className={styles.logoContainer}>
			<img alt='' className={styles.logo} src={gifImg} />
			<div>
				<span className={styles.logoText}>gif</span>
				<span>station</span>
			</div>
		</div>
		<div>hide footage</div>
	</div>
)

const Footage = () => (
	<div className={styles.filmStripContainer}>
		<img alt='' src='https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/319/319970/butterfly-on-red-flower.jpg?w=1155&h=1541' className={styles.filmStripEl}/>
		<img alt='' src='https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/319/319970/butterfly-on-red-flower.jpg?w=1155&h=1541' className={styles.filmStripEl}/>
		<div className={styles.nextFootageEl} />
		<div className={styles.nextFootageEl} />
		<div className={styles.nextFootageEl} />
		<div className={styles.nextFootageEl} />
		<div className={styles.nextFootageEl} />
		<div className={styles.nextFootageEl} />
		<div className={styles.nextFootageEl} />
	</div>
)