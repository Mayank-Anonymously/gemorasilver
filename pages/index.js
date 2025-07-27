import Screen from '@/component/common/Screen';
import CategorySection from '@/component/home/CategorySection';
import CurationSection from '@/component/home/CurationSection';
import FeaturedProductSection from '@/component/home/FeaturedProduct';
import BreadHomeBanner from '@/component/home/homebanner';
import PromoBannerSection from '@/component/home/PromoBannerSection';
import TrendingProductSection from '@/component/home/TrendingProduct';

export default function Home() {
	return (
		<Screen>
			<section style={{ borderRadius: 100, marginLeft: 20, marginRight: 20 }}>
				<BreadHomeBanner />
			</section>
			<section>
				<CategorySection />
			</section>
			<section>
				<FeaturedProductSection />
			</section>
			<section>
				<CurationSection />
			</section>
			<section>
				<PromoBannerSection />
			</section>
			<section>
				<TrendingProductSection />
			</section>
		</Screen>
	);
}
