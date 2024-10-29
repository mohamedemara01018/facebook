import { useDispatch, useSelector } from "react-redux"
import { setLogout } from "../2-rtk/slices/logOutSlice";
import { setUser } from "../2-rtk/slices/loginSlice";

function Signout({ meg, btn_txt1, btn_txt2 }: { meg: string, btn_txt1: string, btn_txt2: string }) {
    const logout = useSelector((state: { logOut: { value: boolean } }) => state.logOut.value);
    const dispatch = useDispatch();
    return (
        <div className="logout-container" data-click={logout ? 'true' : 'false'}>
            <div className="logout-content">
                <p>{meg}</p>
                <div className="btn">
                    <button onClick={() => {
                        dispatch(setLogout(false));
                        dispatch(setUser({
                            user: {},
                            token: ''
                        }));
                        localStorage.clear()
                    }}>{btn_txt1}</button>
                    <button onClick={() => { dispatch(setLogout(false)) }}>{btn_txt2}</button>
                </div>
            </div>
        </div>
    )
}

export default Signout