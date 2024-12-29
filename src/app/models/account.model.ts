import { Person } from "./person.model";
import { Company } from "./company.model";
import { Audit } from "./audit.model";

export interface Account extends Audit {
  accountId: number;
  accountNumber: string;
  nickname: string;
  bankName: string;
  ifscCode: string;
  bankAccountGLCode: string;
  accountPurpose: string;
  primaryTeam: string;
  openingBalance: number;
  relationshipManager: Person;
  company: Company;
  accountCurrency: string;
  accountStatus: string;
}

export interface topNavConfig {
  styleAttributes?: Style;
  title?: string;
  logoImgSrc?: string;
  funcName?: string;
  otherDetails?: any;
  backButton?: boolean;
  hideMenu?: boolean;
  hamburgerStyles?: Style;
  menuFuncName?: string;
}

export interface Style {
  color?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  width?: string;
  height?: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  position?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  lineBreak?: string;
  textAlign?: string;
  textIndent?: string;
  textDecoration?: string;
  textTransform?: string;
  textJustify?: string;
  textOrientation?: string;
  Font?: string;
  FontFamily?: string;
  FontSize?: string;
  fontStyle?: string;
  FontVariant?: string;
  FontWeight?: string;
  border?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderLeft?: string;
  borderLeftWidth?: string;
  borderLeftStyle?: string;
  borderLeftColor?: string;
  borderRight?: string;
  borderRightWidth?: string;
  borderRightStyle?: string;
  borderRightColor?: string;
  borderTop?: string;
  borderTopWidth?: string;
  borderTopStyle?: string;
  borderTopColor?: string;
  borderBottom?: string;
  borderBottomWidth?: string;
  borderBottomStyle?: string;
  borderBottomColor?: string;
  borderRadius?: string;
  margin?: string;
  marginLeft?: string;
  marginRight?: string;
  marginTop?: string;
  marginBottom?: string;
  verticalAlign?: string;
  horizontalAlign?: string;
  padding?: string;
  paddingLeft?: string;
  paddingRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  cursor?: string;
  opacity?: string;
  filter?: string;
  direction?: string;
  boxShadow?: string;
  alignContent?: string;
  display?: string;
  flex?: string;
}