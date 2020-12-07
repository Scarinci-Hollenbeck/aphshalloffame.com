import dbConnect from 'utils/db-connect';
import Ceremonies from 'models/Ceremonies';

export default async function createCeremony(req, res) {
  if (req.method === 'GET') {
    await dbConnect();
    try {
      const ceremony = await new Ceremonies({
        ceremony: '2003',
        photos: [
          {
            year: '2003',
            image:
              '/v1606588372/asburyparkhighschoolhalloffame/Ceremony/2003/15_znj3mj.jpg',
            alt: 'Regan Almonor & Lorraine Hartigan Nonnenberg',
            width: '318',
            height: '417',
          },
          {
            year: '2003',
            image:
              '/v1606588372/asburyparkhighschoolhalloffame/Ceremony/2003/14_gosesd.jpg',
            alt: 'Master of Ceremonies, Mayor Carl Williams',
            width: '316',
            height: '417',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/12_ylcz0k.jpg',
            alt: 'Oliver Jones',
            width: '588',
            height: '396',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/11_sojxa5.jpg',
            alt: 'The Reid Table',
            width: '588',
            height: '395',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/10_bqjvht.jpg',
            alt: 'Dr. John Hayes & Oliver Jones',
            width: '317',
            height: '471',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/9_m9ty6u.jpg',
            alt: 'Frank Budd & Janice Davis Keener',
            width: '316',
            height: '471',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/7_xt4pkg.jpg',
            alt: 'Oliver Jones & Colonel Joseph Reid',
            width: '317',
            height: '412',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/13_z3cdqk.jpg',
            alt: 'Sandy Armstead & Jules Plangere',
            width: '317',
            height: '471',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/5_whbuqs.jpg',
            alt: 'Dr. Phillip Schein & Judge Ira Kreizman',
            width: '317',
            height: '470',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/4_wrydrv.jpg',
            alt: 'Dorothy Smith & Gladys Johnson',
            width: '317',
            height: '471',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/3_xgqrwe.jpg',
            alt: 'Crystal Ballroom - Berkeley Carteret Hotel',
            width: '588',
            height: '396',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/2_tkcksd.jpg',
            alt: 'Palmer Jenkins Trio',
            width: '588',
            height: '396',
          },
          {
            year: '2003',
            image:
              '/v1606588371/asburyparkhighschoolhalloffame/Ceremony/2003/1_psubkj.jpg',
            alt:
              'Carl Williams, Lorraine Nonnenberg, Alan McKean, Janice Davis Keener, Ira Kreizman, Myrna Wright, Sandy Armstead, Gladys Johnson, Oliver Jones',
            width: '588',
            height: '396',
          },
        ],
      }).save();

      return res.status(200).json({
        status: 200,
        message: 'Ceremoney created',
        data: ceremony,
      });
    } catch (error) {
      return res.status(error.status || 500).end(error.message);
    }
  }

  return false;
}
