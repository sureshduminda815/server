
const db = require('../models')
const pricing = db.pricings
const getPricing = async (_req, res) => {



    const plans = await pricing.findAll();
    res.json(plans);
  
  }
  

  
  
  const editPricingPlan =  async (req, res) => {

      console.log("___________________________")
      try {
        const { id } = req.params; // Get the plan ID from the URL
        const updatedPlan = req.body; // Get the updated plan data from the request body
    
        // Find the plan by ID and update it
        const [updated] = await db.pricings.update(updatedPlan, {
          where: { id },
        });
    
        if (updated) {
          const updatedPlanData = await db.pricings.findByPk(id);
          res.status(200).json({ message: 'Plan updated successfully', data: updatedPlanData });
        } else {
          res.status(404).json({ message: 'Plan not found' });
        }
      } catch (error) {
        console.error('Error updating plan:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }

  

module.exports = {
   getPricing,editPricingPlan
  
  
  }