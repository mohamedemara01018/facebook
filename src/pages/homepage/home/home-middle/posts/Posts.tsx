import { useEffect, useState } from "react";
import Post_footer from "./posts-components/Post_footer"
import Post_head from "./posts-components/Post_head"
import { useDispatch } from "react-redux";
import { setAlert } from "../../../../../2-rtk/slices/alertSlice";
import { set_post_id } from "../../../../../2-rtk/slices/showPostSice";


type itemType = {
  data: {
    id: number,
    body: string,
    author: {
      name: string,
      profile_image: string
    },
    comments_count: number,
    image: string,
    created_at: string
  }[]
}







function Posts() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<itemType>({} as itemType)
  const [limt, setLimt] = useState<number>(10);
  const [loading, setLoaing] = useState<boolean>(false)
  const [loadingInEnd, setLoaingInEnd] = useState<boolean>(false)
  // const [message, setAlert] = useState({ mes: '', state: false })
  async function fetchPosts(l: number) {

    try {
      const response = await fetch(`https://tarmeezacademy.com/api/v1/posts?limit=${l}`);
      switch (response.status) {
        case 200:
          {
            const data = await response.json();
            setPosts(data);
            break;
          }

        case 400:
          dispatch(setAlert({
            title: 'حدث خطا', mes: 'هناك خطأ في الطلب. تحقق من المعلمات.', type: true,
          }))
          break;
        case 401:
          dispatch(setAlert({
            title: 'حدث خطا', mes: 'غير مصرح لك. تأكد من تسجيل الدخول.', type: true,
          }))
          break;

        case 403:

          dispatch(setAlert({
            title: 'حدث خطا', mes: 'ليس لديك الإذن للوصول إلى هذا المورد.', type: true,
          }))
          break;

        case 404:
          dispatch(setAlert({
            title: 'حدث خطا', mes: 'المورد غير موجود.', type: true,
          }))
          break;

        case 429:
          dispatch(setAlert({
            title: "هناك تحزير", mes: 'تم إرسال عدد كبير جدًا من الطلبات. يرجى المحاولة لاحقًا.', type: true,
          }))
          break;

        case 500:

          dispatch(setAlert({
            title: 'حدث خطا', mes: 'حدث خطأ في الخادم. يرجى المحاولة لاحقًا.', type: true,
          }))
          break;

        case 503:
          dispatch(setAlert({
            title: 'حدث خطا', mes: 'الخدمة غير متاحة حاليًا. حاول لاحقًا.', type: true,
          }))
          break;

        default:
          dispatch(setAlert({
            title: 'حدث خطا', mes: `حدث خطأ غير متوقع: ${response.status}`, type: true,
          }))
          break;
      }

    } catch (e) {
      dispatch(setAlert({
        title: 'حدث خطا', mes: e, type: true,
      }))
    }
  }
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setLimt((prevPage) => prevPage + 1);
      setLoaingInEnd(true);
    } else {
      setLoaingInEnd(true);
    }
  };
  // إضافة مستمع للتمرير
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    setLoaing(true)
    fetchPosts(limt);
    setLoaing(false)
  }, [limt])

  return (
    <div className="home-middle-container">
      {
        !loading && posts && posts.data ? posts['data'].map((item) => {
          return <div key={item.id} className="home-middle-post">
            <Post_head name={item.author.name} created_at={item.created_at} profile_image={item.author.profile_image} flag={true} />
            <div className="post-para" >
              <p>{item.body ? item.body : ''}</p>
            </div>
            <div className="post-img" onClick={() => dispatch(set_post_id({ value: item.id, state: true }))}>
              <img src={item.image} alt="" />
            </div>
            <h1 dir="rtl" onClick={() => dispatch(set_post_id({ value: item.id, state: true }))}>{item.comments_count} تعليق</h1>
            <hr />
            <Post_footer id={item.id} />
          </div>
        }) : <div className="loading-button">
          <span className="spinner"></span>
        </div>

      }
      {
        loadingInEnd && <div className="loading-button">
          <span className="spinner"></span>
        </div>
      }

    </div>
  )
}

export default Posts