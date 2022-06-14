import {
  AddIcon,
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  AtSignIcon,
  AttachmentIcon,
  BellIcon,
  CalendarIcon,
  ChatIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CloseIcon,
  CopyIcon,
  DeleteIcon,
  DownloadIcon,
  DragHandleIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  InfoIcon,
  InfoOutlineIcon,
  LinkIcon,
  LockIcon,
  MinusIcon,
  MoonIcon,
  NotAllowedIcon,
  PhoneIcon,
  PlusSquareIcon,
  QuestionIcon,
  QuestionOutlineIcon,
  RepeatClockIcon,
  RepeatIcon,
  Search2Icon,
  SearchIcon,
  SettingsIcon,
  SmallAddIcon,
  SmallCloseIcon,
  SpinnerIcon,
  StarIcon,
  SunIcon,
  TimeIcon,
  TriangleDownIcon,
  TriangleUpIcon,
  UnlockIcon,
  UpDownIcon,
  ViewIcon,
  ViewOffIcon,
  WarningIcon,
  WarningTwoIcon,
} from "@chakra-ui/icons";
import { As, Icon } from "@chakra-ui/react";

export type IconName =
  | "AddIcon"
  | "ArrowBackIcon"
  | "ArrowDownIcon"
  | "ArrowForwardIcon"
  | "ArrowLeftIcon"
  | "ArrowRightIcon"
  | "ArrowUpIcon"
  | "ArrowUpDownIcon"
  | "AtSignIcon"
  | "AttachmentIcon"
  | "BellIcon"
  | "CalendarIcon"
  | "ChatIcon"
  | "CheckIcon"
  | "CheckCircleIcon"
  | "ChevronDownIcon"
  | "ChevronLeftIcon"
  | "ChevronRightIcon"
  | "ChevronUpIcon"
  | "CloseIcon"
  | "CopyIcon"
  | "DeleteIcon"
  | "DownloadIcon"
  | "DragHandleIcon"
  | "EditIcon"
  | "EmailIcon"
  | "ExternalLinkIcon"
  | "HamburgerIcon"
  | "InfoIcon"
  | "InfoOutlineIcon"
  | "LinkIcon"
  | "LockIcon"
  | "MinusIcon"
  | "MoonIcon"
  | "NotAllowedIcon"
  | "PhoneIcon"
  | "PlusSquareIcon"
  | "QuestionIcon"
  | "QuestionOutlineIcon"
  | "RepeatIcon"
  | "RepeatClockIcon"
  | "SearchIcon"
  | "Search2Icon"
  | "SettingsIcon"
  | "SmallAddIcon"
  | "SmallCloseIcon"
  | "SpinnerIcon"
  | "StarIcon"
  | "SunIcon"
  | "TimeIcon"
  | "TriangleDownIcon"
  | "TriangleUpIcon"
  | "UnlockIcon"
  | "UpDownIcon"
  | "ViewIcon"
  | "ViewOffIcon"
  | "WarningIcon"
  | "WarningTwoIcon"
  | undefined;

interface IconSelector {
  (iconName: IconName): As<any> | undefined;
  (iconName: IconName, returnTypeAs: "JSXElement"): React.ReactElement<
    any,
    string | React.JSXElementConstructor<any>
  >;
}

export function IconSelector(iconName: IconName, returnTypeAs?: "JSXElement") {
  const svgIcons: Record<string, any> = {
    AddIcon: AddIcon,
    ArrowBackIcon: ArrowBackIcon,
    ArrowDownIcon: ArrowDownIcon,
    ArrowForwardIcon: ArrowForwardIcon,
    ArrowLeftIcon: ArrowLeftIcon,
    ArrowRightIcon: ArrowRightIcon,
    ArrowUpIcon: ArrowUpIcon,
    ArrowUpDownIcon: ArrowUpDownIcon,
    AtSignIcon: AtSignIcon,
    AttachmentIcon: AttachmentIcon,
    BellIcon: BellIcon,
    CalendarIcon: CalendarIcon,
    ChatIcon: ChatIcon,
    CheckIcon: CheckIcon,
    CheckCircleIcon: CheckCircleIcon,
    ChevronDownIcon: ChevronDownIcon,
    ChevronLeftIcon: ChevronLeftIcon,
    ChevronRightIcon: ChevronRightIcon,
    ChevronUpIcon: ChevronUpIcon,
    CloseIcon: CloseIcon,
    CopyIcon: CopyIcon,
    DeleteIcon: DeleteIcon,
    DownloadIcon: DownloadIcon,
    DragHandleIcon: DragHandleIcon,
    EditIcon: EditIcon,
    EmailIcon: EmailIcon,
    ExternalLinkIcon: ExternalLinkIcon,
    HamburgerIcon: HamburgerIcon,
    InfoIcon: InfoIcon,
    InfoOutlineIcon: InfoOutlineIcon,
    LinkIcon: LinkIcon,
    LockIcon: LockIcon,
    MinusIcon: MinusIcon,
    MoonIcon: MoonIcon,
    NotAllowedIcon: NotAllowedIcon,
    PhoneIcon: PhoneIcon,
    PlusSquareIcon: PlusSquareIcon,
    QuestionIcon: QuestionIcon,
    QuestionOutlineIcon: QuestionOutlineIcon,
    RepeatIcon: RepeatIcon,
    RepeatClockIcon: RepeatClockIcon,
    SearchIcon: SearchIcon,
    Search2Icon: Search2Icon,
    SettingsIcon: SettingsIcon,
    SmallAddIcon: SmallAddIcon,
    SmallCloseIcon: SmallCloseIcon,
    SpinnerIcon: SpinnerIcon,
    StarIcon: StarIcon,
    SunIcon: SunIcon,
    TimeIcon: TimeIcon,
    TriangleDownIcon: TriangleDownIcon,
    TriangleUpIcon: TriangleUpIcon,
    UnlockIcon: UnlockIcon,
    UpDownIcon: UpDownIcon,
    ViewIcon: ViewIcon,
    ViewOffIcon: ViewOffIcon,
    WarningIcon: WarningIcon,
    WarningTwoIcon: WarningTwoIcon,
  };

  if (typeof iconName === "string" && returnTypeAs === "JSXElement") {
    return <Icon as={svgIcons[iconName]} />;
  }
  return svgIcons[iconName ? iconName : "AddIcon"];
}

// | As<any>
// | React.ReactElement<any, string | React.JSXElementConstructor<any>>
// | undefined
