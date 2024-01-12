import { IDataBestServices } from "@/app/services/page";

interface IProps {
    item: IDataBestServices;
}

import "./best-service-item.css";

const BestServiceItem: React.FC<IProps> = ({ item }) => {
    return (
        <div className="best-service-item">
            <div className="service-item-box">
                <span className="icon-best">{item.icon}</span>
                <h4>
                    <a href="#">{item.title}</a>
                </h4>
                <p>{item.text}</p>
                <a href="#">Read More</a>
            </div>
        </div>
    );
};

export default BestServiceItem;
