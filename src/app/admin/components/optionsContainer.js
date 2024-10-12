import { Text } from "@/app/components/text"

export const OptionsContainer = ({children, context}) => {

    return (
        <div className='pd-24 pd-12-tb bg-white br-8 bx-sdow' >
            <Text type='02' content={context}/>
            {children}
        </div>
    )

}