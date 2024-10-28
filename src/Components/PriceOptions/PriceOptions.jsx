import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

      const PriceOptions = [
            {
                  "id": 1,
                  "name": "Basic",
                  "price": 20,
                  "features": ["Access to gym equipment", "Locker room access", "Free Wi-Fi"]
            },
            {
                  "id": 2,
                  "name": "Standard",
                  "price": 35,
                  "features": ["Access to gym equipment", "Locker room access", "Group fitness classes", "Free Wi-Fi", "Sauna access"]
            },
            {
                  "id": 3,
                  "name": "Premium",
                  "price": 50,
                  "features": ["Access to gym equipment", "Locker room access", "Group fitness classes", "Personal training sessions", "Free Wi-Fi", "Sauna access", "Towel service"]
            },
            {
                  "id": 4,
                  "name": "VIP",
                  "price": 75,
                  "features": ["Access to gym equipment", "Locker room access", "Group fitness classes", "Personal training sessions", "Spa access", "Free Wi-Fi", "Sauna access", "Towel service", "Nutrition counseling"]
            },
            {
                  "id": 5,
                  "name": "Elite",
                  "price": 100,
                  "features": ["Access to gym equipment", "Locker room access", "Group fitness classes", "Personal training sessions", "Spa access", "Free Wi-Fi", "Sauna access", "Towel service", "Nutrition counseling", "Private locker"]
            }
      ]


      return (
            <div className="m-12">
                  <h2 className="text-5xl">Best Price Option in the town</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                        {
                              PriceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption>)
                        }
                  </div>
            </div>
      );
};

export default PriceOptions;