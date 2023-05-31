import { CardStepFormDinami } from "../../elements/stepDinamic";


const StepsFormDinami = ({ title, subTitle }) => {
    return (
        <>
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
                <div className="text-700 text-center">
                    <div className="text-900 font-bold text-5xl mb-3">{title}</div>
                    <div className="text-700 text-2xl mb-5">{subTitle}</div>
                </div>
                <CardStepFormDinami />
            </div>
        </>
    );
};

export default StepsFormDinami
