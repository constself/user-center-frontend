import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {WECHAT_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'G1ren出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'usercenter',
          title: '用户中心',
          href: WECHAT_LINK,
          blankTarget: true,
        },
        {
          key: 'coder',
          title: 'G1ren',
          href: 'WECHAT_LINK',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> G1ren GitHub</>,
          href: 'https://github.com/constself',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
