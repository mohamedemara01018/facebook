import { useDispatch, useSelector } from "react-redux"
import { setAlert } from "../2-rtk/slices/alertSlice";
type alertType = {
    title: string,
    mes: string,
    type: boolean
}



function Alert() {
    const alert = useSelector((state: { alert: alertType }) => state.alert);
    const dispatch = useDispatch();
    return (
        <div className="main-alert-container" date-close={alert.type ? 'true' : 'false'}>
            <div className="alert-container" data-color={alert.title == 'نجح' ? 'نجح' : (alert.title == 'حدث خطا') ? 'حدث خطا' : "هناك تحزير"}>
                <div>
                    <h1 className="title">{alert.title}</h1>
                </div>
                <div className="content">

                    <div className="center">
                        {alert.title == 'نجح' ? <i className="fa-solid fa-circle-check"></i> : <i className="fa-solid fa-circle-exclamation"></i>}
                        <p className="desc">{alert.mes}</p>
                    </div>
                    <div>
                        <button className="btn" onClick={() => dispatch(setAlert({
                            ...alert, type: false,
                        }))}>Close</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Alert