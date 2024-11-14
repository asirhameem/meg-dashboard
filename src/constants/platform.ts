import { IPlatformSection } from "../interfaces";

export const PLATFORM_SECTION: IPlatformSection[] = [
  {
    value: 'platform',
    label: 'Platform',
    configuration: [
      {
        value: 'company_name',
        label: 'Company Name',
      },
      {
        value: 'address',
        label: 'Address',
      },
      {
        value: 'company_phone',
        label: 'Company Phone',
      },
      {
        value: 'landing_video',
        label: 'Landing Video',
      }
    ]
  },
  {
    value: 'navbar',
    label: 'Navbar',
    configuration: [
      {
        value: 'logo_dark',
        label: 'Logo Dark',
      },
      {
        value: 'logo_light',
        label: 'Logo Light',
      }
    ]
  },
  {
    value: 'product',
    label: 'Product',
    configuration: [
      {
        value: 'bj40_hero',
        label: 'BJ40 Hero',
      },
      {
        value: 'x55_hero',
        label: 'X55 Hero',
      }
    ]
  },
  {
    value: 'footer',
    label: 'Footer',
    configuration: [
      {
        value: 'footer_company_phone',
        label: 'Footer Company Phone',
      },
      {
        value: 'footer_company_address',
        label: 'Footer Company Address',
      },
      {
        value: 'footer_business_hour_text',
        label: 'Footer Business Hour Text',
      },
      {
        value: 'footer_summary_title',
        label: 'Footer Summary Title',
      },
      {
        value: 'footer_summary_description',
        label: 'Footer Summary Description',
      },
      {
        value: 'footer_social_fb',
        label: 'Footer Social FB',
      },
      {
        value: 'footer_social_instagram',
        label: 'Footer Social Instagram',
      },
      {
        value: 'footer_social_twitter',
        label: 'Footer Social Twitter',
      },
      {
        value: 'footer_company_name',
        label: 'Footer Company Name',
      },
      {
        value: 'footer_banner_image',
        label: 'Footer Banner Image',
      }
    ]
  },
  {
    value: 'meg_bank',
    label: 'MEG Bank',
    configuration: [
      {
        value: 'bank_name',
        label: 'MEG Bank Name',
      },
      {
        value: 'branch_name',
        label: 'MEG Branch Name',
      },
      {
        value: 'branch_route_number',
        label: 'MEG Branch Route Number',
      },
      {
        value: 'bank_account_name',
        label: 'MEG Bank Account Name',
      },
      {
        value: 'bank_account_number',
        label: 'MEG Bank Account Number',
      }
    ]
  }
]