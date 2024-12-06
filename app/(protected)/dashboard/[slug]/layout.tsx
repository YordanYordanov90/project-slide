import Infobar from '@/components/global/infobar';

import Sidebar from "@/components/siderbar";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};
async function Layout({ children, params }: Props) {
  // const query = new QueryClient()

  // await PrefetchUserProfile(query)

  // await PrefetchUserAutnomations(query)
  return (
    <div className="p-3">
      <Sidebar slug={params.slug} />
      <div
          className="
      lg:ml-[250px] 
      lg:pl-10 
      lg:py-5 
      flex 
      flex-col 
      overflow-auto
      "
        >
          <Infobar slug={params.slug} />
      {children}
        </div>
    </div>
  );
}

export default Layout;
