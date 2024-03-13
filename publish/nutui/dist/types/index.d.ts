import { App } from 'vue';
import Locale from './locale';
import Button from './__VUE/button/index';
export * from './__VUE/button/index';
import Cell from './__VUE/cell/index.vue';
import CellGroup from './__VUE/cellgroup/index.vue';
import Overlay from './__VUE/overlay/index.vue';
import Popup from './__VUE/popup/index.vue';
import ConfigProvider from './__VUE/configprovider/index.vue';
import Image from './__VUE/image/index.vue';
import Layout from './__VUE/layout/index';
export * from './__VUE/layout/index';
import Col from './__VUE/col/index';
export * from './__VUE/col/index';
import Row from './__VUE/row/index';
export * from './__VUE/row/index';
import Sticky from './__VUE/sticky/index.vue';
import Divider from './__VUE/divider/index';
export * from './__VUE/divider/index';
import Grid from './__VUE/grid/index.vue';
import GridItem from './__VUE/griditem/index.vue';
import Space from './__VUE/space/index.vue';
import Navbar from './__VUE/navbar/index.vue';
import FixedNav from './__VUE/fixednav/index.vue';
import Menu from './__VUE/menu/index.vue';
import MenuItem from './__VUE/menuitem/index.vue';
import Tabbar from './__VUE/tabbar/index.vue';
import TabbarItem from './__VUE/tabbaritem/index.vue';
import Elevator from './__VUE/elevator/index.vue';
import Pagination from './__VUE/pagination/index.vue';
import Tabs from './__VUE/tabs/index.vue';
import TabPane from './__VUE/tabpane/index.vue';
import Indicator from './__VUE/indicator/index.vue';
import SideNavbar from './__VUE/sidenavbar/index.vue';
import SideNavbarItem from './__VUE/sidenavbaritem/index.vue';
import SubSideNavbar from './__VUE/subsidenavbar/index.vue';
import Range from './__VUE/range/index.vue';
import Searchbar from './__VUE/searchbar/index.vue';
import Cascader from './__VUE/cascader/index.vue';
import Calendar from './__VUE/calendar/index.vue';
import CalendarCard from './__VUE/calendarcard/index';
export * from './__VUE/calendarcard/index';
import Checkbox from './__VUE/checkbox/index.vue';
import CheckboxGroup from './__VUE/checkboxgroup/index.vue';
import DatePicker from './__VUE/datepicker/index.vue';
import InputNumber from './__VUE/inputnumber/index';
export * from './__VUE/inputnumber/index';
import Input from './__VUE/input/index.vue';
import Radio from './__VUE/radio/index.vue';
import RadioGroup from './__VUE/radiogroup/index.vue';
import Rate from './__VUE/rate/index';
export * from './__VUE/rate/index';
import Picker from './__VUE/picker/index.vue';
import ShortPassword from './__VUE/shortpassword/index.vue';
import Textarea from './__VUE/textarea/index.vue';
import Uploader from './__VUE/uploader/index.vue';
import NumberKeyboard from './__VUE/numberkeyboard/index.vue';
import Form from './__VUE/form/index';
export * from './__VUE/form/index';
import FormItem from './__VUE/formitem/index';
export * from './__VUE/formitem/index';
import Swipe from './__VUE/swipe/index.vue';
import SwipeGroup from './__VUE/swipegroup/index.vue';
import ActionSheet from './__VUE/actionsheet/index.vue';
import Backtop from './__VUE/backtop/index.vue';
import Drag from './__VUE/drag/index.vue';
import Dialog from './__VUE/dialog/index.vue';
import { showDialog } from './__VUE/dialog/index';
import InfiniteLoading from './__VUE/infiniteloading/index.vue';
import PullRefresh from './__VUE/pullrefresh/index.vue';
import Notify from './__VUE/notify/index.vue';
import { showNotify } from './__VUE/notify/index';
import Switch from './__VUE/switch/index.vue';
import Toast from './__VUE/toast/index.vue';
import { showToast } from './__VUE/toast/index';
import Audio from './__VUE/audio/index.vue';
import AudioOperate from './__VUE/audiooperate/index.vue';
import Avatar from './__VUE/avatar/index.vue';
import AvatarGroup from './__VUE/avatargroup/index.vue';
import List from './__VUE/list/index.vue';
import Progress from './__VUE/progress/index.vue';
import CircleProgress from './__VUE/circleprogress/index.vue';
import Noticebar from './__VUE/noticebar/index.vue';
import Empty from './__VUE/empty/index.vue';
import Video from './__VUE/video/index.vue';
import Steps from './__VUE/steps/index.vue';
import Step from './__VUE/step/index.vue';
import Swiper from './__VUE/swiper/index.vue';
import SwiperItem from './__VUE/swiperitem/index.vue';
import Price from './__VUE/price/index';
export * from './__VUE/price/index';
import ImagePreview from './__VUE/imagepreview/index.vue';
import { showImagePreview } from './__VUE/imagepreview/index';
import Countup from './__VUE/countup/index.vue';
import Countdown from './__VUE/countdown/index.vue';
import Badge from './__VUE/badge/index.vue';
import Tag from './__VUE/tag/index.vue';
import Popover from './__VUE/popover/index.vue';
import Skeleton from './__VUE/skeleton/index.vue';
import Collapse from './__VUE/collapse/index';
export * from './__VUE/collapse/index';
import CollapseItem from './__VUE/collapseitem/index';
export * from './__VUE/collapseitem/index';
import Table from './__VUE/table/index.vue';
import Animate from './__VUE/animate/index';
export * from './__VUE/animate/index';
import Ellipsis from './__VUE/ellipsis/index.vue';
import Watermark from './__VUE/watermark/index.vue';
import TrendArrow from './__VUE/trendarrow/index.vue';
import Tour from './__VUE/tour/index.vue';
import Address from './__VUE/address/index.vue';
import Barrage from './__VUE/barrage/index.vue';
import Signature from './__VUE/signature/index.vue';
import TimeSelect from './__VUE/timeselect/index.vue';
import TimePannel from './__VUE/timepannel/index.vue';
import TimeDetail from './__VUE/timedetail/index.vue';
import Sku from './__VUE/sku/index.vue';
import Card from './__VUE/card/index.vue';
import Ecard from './__VUE/ecard/index.vue';
import AddressList from './__VUE/addresslist/index.vue';
import Category from './__VUE/category/index.vue';
import CategoryPane from './__VUE/categorypane/index.vue';
import Comment from './__VUE/comment/index.vue';
import Invoice from './__VUE/invoice/index.vue';
import AvatarCropper from './__VUE/avatarcropper/index.vue';
declare function install(app: App): void;
declare const version = "4.3.2";
export { install, version, Locale, Button, Cell, CellGroup, Overlay, Popup, ConfigProvider, Image, Layout, Col, Row, Sticky, Divider, Grid, GridItem, Space, Navbar, FixedNav, Menu, MenuItem, Tabbar, TabbarItem, Elevator, Pagination, Tabs, TabPane, Indicator, SideNavbar, SideNavbarItem, SubSideNavbar, Range, Searchbar, Cascader, Calendar, CalendarCard, Checkbox, CheckboxGroup, DatePicker, InputNumber, Input, Radio, RadioGroup, Rate, Picker, ShortPassword, Textarea, Uploader, NumberKeyboard, Form, FormItem, Swipe, SwipeGroup, ActionSheet, Backtop, Drag, Dialog, InfiniteLoading, PullRefresh, Notify, Switch, Toast, Audio, AudioOperate, Avatar, AvatarGroup, List, Progress, CircleProgress, Noticebar, Empty, Video, Steps, Step, Swiper, SwiperItem, Price, ImagePreview, Countup, Countdown, Badge, Tag, Popover, Skeleton, Collapse, CollapseItem, Table, Animate, Ellipsis, Watermark, TrendArrow, Tour, Address, Barrage, Signature, TimeSelect, TimePannel, TimeDetail, Sku, Card, Ecard, AddressList, Category, CategoryPane, Comment, Invoice, AvatarCropper, showDialog, showNotify, showToast, showImagePreview };
declare const _default: {
    install: typeof install;
    version: string;
};
export default _default;
