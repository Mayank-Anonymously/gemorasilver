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

export default function Home({ products }) {
	const router = useRouter();
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
							<form
								className='d-flex search-form overflow-hidden'
								role='search'>
								<button
									className='btn'
									type='submit'>
									<CiSearch size={25} />
								</button>
								<input
									type='text'
									className='form-control form-control-lg border-0'
									placeholder='Search products'
									aria-label='Search'
								/>
							</form>
						</div>
					</div>
				</div>
			</section>

			<section id='category-section'>
				<CategorySection />
			</section>

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
		const res = await axios.get(`${HOST}product/getAllProducts`);
		return {
			props: {
				products: res.data.response || [], // adjust according to your API response
			},
		};
	} catch (error) {
		console.error('Error fetching products:', error.message);
		return {
			props: {
				products: [],
			},
		};
	}
}
