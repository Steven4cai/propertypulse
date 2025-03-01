import Link from "next/link";

const InfoBox = ({heading,children,
    bgcolor = 'bg-gray-100',textcolor= 'text-gray-800',
    buttonInfo}) => {
    return (<>
     <div className={`${bgcolor} p-6 rounded-lg shadow-md`}>
            <h2 className={`${textcolor} text-2xl font-bold`}>{heading}</h2>
            <p className={`${textcolor} mt-2 mb-4`}>
              {children}
            </p>
            <Link
              href={buttonInfo.link}
              className={`${buttonInfo.bgcolor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
              {buttonInfo.text}
            </Link>
          </div>
    </>);
}
 
export default InfoBox;