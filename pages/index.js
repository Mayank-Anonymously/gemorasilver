import FooterInfo from '@/component/common/FooterInfo';
import Screen from '@/component/common/Screen';
import CategorySection from '@/component/home/CategorySection';
import { CiSearch } from 'react-icons/ci';
import CurationSection from '@/component/home/CurationSection';
import FeaturedProductSection from '@/component/home/FeaturedProduct';
import BreadHomeBanner from '@/component/home/homebanner';
import PromoBannerSection from '@/component/home/PromoBannerSection';
import Testimonials from '@/component/home/testimonials';
import TrendingProductSection from '@/component/home/TrendingProduct';
import PreciouslyCrafted from '@/component/home/HandmadeCollection';
import NewCollection from '@/component/home/NewCollection';
import TestimonialCarousel from '@/component/home/FoundersSection';
import axios from 'axios';
import { HOST } from '@/component/apibaseurl';
import { useRouter } from 'next/navigation';
import SocialMediaSection from './SocialMediahandle';
import FloatingWhatsAppButton from '@/component/common/FloatingButton';
import { ClientPageRoot } from 'next/dist/client/components/client-page';

export default function Home({ products, categoryCounts }) {
	const router = useRouter();
	console.log('ca`tegories:', categoryCounts);

	return (
		<Screen>
			<section>
				<BreadHomeBanner />
			</section>
			<section
				id='searchbar'
				className='py-2'>
				<div className='container'>
					<div className='row justify-content-center'>
						<div className='col-md-8'>
							<form className='search-form overflow-hidden'>
								<a
									href='/search-product'
									className='text-decoration-none text-black d-flex'>
									<button className='btn'>
										<CiSearch size={25} />
									</button>
									<input
										type='text'
										className='form-control form-control-lg border-0'
										placeholder='Search products'
										aria-label='Search'
										readOnly
									/>
								</a>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section id='category-section'>
				<CategorySection categoryCounts={categoryCounts} />
			</section>
			<FloatingWhatsAppButton />

			<section>
				<NewCollection
					products={products}
					heading={
						<h2
							style={{
								color: '#812d3e',
								fontFamily: "'Great Vibes', cursive",
								marginTop: 10,
							}}>
							Suggested by{' '}
							<span
								style={{
									color: '#812d3e',
									fontFamily: 'none',
									marginTop: 10,
								}}>
								Founders{' '}
							</span>
						</h2>
					}
				/>
			</section>

			<section>
				<PreciouslyCrafted />
			</section>

			<section>
				<PromoBannerSection />
			</section>

			<section>
				<TestimonialCarousel />
			</section>
			<section>
				<SocialMediaSection />
			</section>
		</Screen>
	);
}
export async function getServerSideProps() {
	try {
		const [productRes, categoryRes] = await Promise.all([
			axios.get(`${HOST}product/getAllProducts`),
			axios.get(`${HOST}getAllCategories`),
		]);

		const products = productRes.data.response || [];
		const categories = categoryRes.data.response || [];

		// Filter suggested products
		const filteredStyle = products.filter(
			(item) => item.styleOne === 'sugessted-by-founders'
		);

		// Define the category groups you want counts for
		const categoryGroups = [
			'BRACELET',
			'NECKLACE SET',
			'JEWELLERY SET',
			'TOE RING',
			'EARRINGS',
			'ANKLET',
			'PENDANT',
			'RINGS',
		];

		// Build the counts dynamically
		const categoryCounts = {};
		for (const name of categoryGroups) {
			categoryCounts[name.replace(/\s+/g, '_').toUpperCase()] = products.filter(
				(item) => item.categoryName?.toUpperCase() === name
			).length;
		}

		// Example result:
		// {
		//   BRACELET: 5,
		//   NECKLACE_SET: 8,
		//   JEWELLERY_SET: 4,
		//   TOE_RING: 2,
		//   EARRINGS: 10,
		//   ANKLET: 3,
		//   PENDANT: 6,
		//   RINGS: 7
		// }

		return {
			props: {
				products: filteredStyle,
				categories,
				categoryCounts, // ✅ add these counts to props
			},
		};
	} catch (error) {
		console.error('Error fetching data:', error.message);
		return {
			props: {
				products: [],
				categories: [],
				categoryCounts: {},
			},
		};
	}
}
