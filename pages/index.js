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

export default function Home() {
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

			<section>
				<CategorySection />
			</section>
			<section>
				<TrendingProductSection />
			</section>

			<section data-aos='fade-right'>
				<CurationSection />
			</section>

			<section>
				<FooterInfo />
			</section>
			<section>
				<PromoBannerSection />
			</section>
			<section>
				<FeaturedProductSection />
			</section>

			<section>
				<Testimonials />{' '}
			</section>
		</Screen>
	);
}
