import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MovieRow from '../../components/MovieRow'
import { useRouter } from 'expo-router'

export default function HomeScreen() {
  const STORAGE_KEY = '@movie_list';
  const router = useRouter();
  

  const addToMyList = async (imageUrl: string) => {
      console.log("Added:", imageUrl);
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      const currentList = jsonValue != null ? JSON.parse(jsonValue) : [];


      const alreadyExists = currentList.find(
        (item: any) => item.image === imageUrl
      );

      const newMovie = {
        id: Date.now().toString(),
        image: imageUrl,
      };

      const updatedList = [...currentList, newMovie];

      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedList)
      );

      console.log("เพิ่มสำเร็จ");
    } catch (e) {
      console.log("Error saving");
    }
  };


  return (

    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://s359.kapook.com/pagebuilder/f387e97c-8ed1-49e0-a902-bdf12f2bd1b9.jpg'
        }}
        style={styles.heroImage}
      >
        <View style={styles.heroOverlay}>
          {/* ชื่อเรื่องขนาดใหญ่ */}
          <Text style={styles.heroTitle}>7 ประจัญบาน</Text>
          <Text style={styles.heroSubtitle}>ดูตอนใหม่ได้วันพฤหัสบดีนี้</Text>

          {/* แถบปุ่มกด (Play / My List) */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.playButton}>
              <Ionicons name="play" size={24} color="black" />
              <Text style={styles.playButtonText}>เล่น</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.myListButton}
              onPress={async () => {
                await addToMyList(
                  'https://s359.kapook.com/pagebuilder/f387e97c-8ed1-49e0-a902-bdf12f2bd1b9.jpg'
                );
                router.push('/mynetflix');
              }}
            >
              <Ionicons name="add" size={24} color="white" />
              <Text style={styles.myListText}>รายการของฉัน</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      <MovieRow
        title="รายการทีวีแนวคอมเมดี้สัญชาติเกาหลี"
        images={[
            'https://upload.wikimedia.org/wikipedia/th/7/76/True_Beauty_TV_series_poster.jpg',
            'https://i0.wp.com/www.korseries.com/wp-content/uploads/2024/03/Queen-of-tears-tvn-netflix-poster-th-040324.jpg?resize=692%2C1024&ssl=1',
            'https://s359.kapook.com/r/600/auto/pagebuilder/1332cd36-83ad-4a91-9894-0357c00ddcf2.jpg',
            'https://s359.kapook.com/pagebuilder/b2d0fdb5-a599-44ed-932b-1a247a0460e5.jpg',
            'https://s359.kapook.com/pagebuilder/5efe817b-01b6-496f-bbf7-88299fee4226.jpg',
            'https://s359.kapook.com/pagebuilder/885e7f35-2967-4b22-910d-9e77e18059ac.jpg',
            'https://mpics.mgronline.com/pics/Images/565000012416705.JPEG',
            'https://cms.dmpcdn.com/ugcarticle/2026/02/03/618f75d0-00ad-11f1-842a-7baa2fadedfa_webp_original.webp',
          ]}
          addToMyList={addToMyList}
      />

      <MovieRow
        title="ภาพยนตร์เอเชียตะวันออกเฉียงใต้"
        images={[
            'https://f.ptcdn.info/350/089/000/t3ddzl29wxt29XD53mfpI-o.jpg',
            'https://lh3.googleusercontent.com/g3qlW_3yHBXyNwwdpofj7Q1aYRQn9mKEWGIqikMdPjidSeOkJUCwbzjfx02FRrHxgxRsbVjvwmoCngbLSfi_xA5GW8XvFBXVUQ=w260',
            'https://i.pinimg.com/736x/90/56/5b/90565bb85855f7b0d0dafcf31461d0c6.jpg',
            'https://s.isanook.com/mv/0/ud/37/185835/teeyai_mainposter.jpg?ip/resize/w728/q80/jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEXW_4t4g7Kda4-w4D_7nEzCw4ZI4_MIFAg&s',
            'https://m.media-amazon.com/images/M/MV5BYjg2M2QxYTUtYTE0YS00MWVmLWFlMDQtN2VkNGE2OGNlMGUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoDrBnvfT_4BTolEGXWVIczPgNHJCQO6hWtk7kLQbJfNiBNjI1mwiMgZSIA9ONrVhr_NVf0R5QJaGF49L57TUQOdiZTo-QthEjAnWQHrZus_XBXYcvgOxqqorUC2FEJ0MQR-OLpM-tRRNeb6srmU50ss391g6tRY7Q_L-cfhjbiRhtwc7N_KTpZP13TkQ/s1484/47605CB4-8CC9-4F46-9CBC-3F7BFAB4F8DD.webp',
            'https://images.workpointtoday.com/workpointnews/2021/12/13161529/1639386926_22657_THTheMediumMain2.webp',
            'https://ptcdn.info/movies/2025/FSoQNijX3t-1743500949_o.jpg'
        ]}
        addToMyList={addToMyList}
      />

      <MovieRow
        title="ซีรี่ย์ LGBTQ+"
        images={[
            'https://upload.wikimedia.org/wikipedia/th/thumb/1/15/ThamePo_Heart_That_Skips_a_Beat_2024_Official_Poster.png/250px-ThamePo_Heart_That_Skips_a_Beat_2024_Official_Poster.png',
            'https://cms.dmpcdn.com/dara/2025/11/29/57d4b020-cd11-11f0-9bba-e38138427309_webp_original.webp',
            'https://upload.wikimedia.org/wikipedia/th/5/51/%E0%B8%8B%E0%B8%AD%E0%B8%87%E0%B9%81%E0%B8%94%E0%B8%87%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B5.jpg',
            'https://f.ptcdn.info/366/083/000/s9kh99dfwStOrsMXNSV-o.jpg',
            'https://upload.wikimedia.org/wikipedia/th/thumb/2/2e/Whale_Store_xoxo_2025_Official_Poster.png/250px-Whale_Store_xoxo_2025_Official_Poster.png',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2emGI-0i9UsNqwSsGm2OOCbEUMR-dubisvA&s',
            'https://image.onehd.net/Media/Test/244727114711751.jpg',
            'https://s.isanook.com/mv/0/ud/36/182983/298970.jpg?ip/resize/w728/q80/jpg',
            'https://s359.kapook.com/pagebuilder/d1100769-51ff-4fda-86d4-958800a7488f.jpg'
         ]}
         addToMyList={addToMyList}
      />

      <MovieRow
        title="ภาพยนตร์ตลกคู่หู"
        images={[
            'https://f.ptcdn.info/933/012/000/1386166085-o.jpg',
            'https://files.thaiware.site/movie/2023-03/images-poster/2303191204146ck.jpg',
            'https://upload.wikimedia.org/wikipedia/th/a/a3/%E0%B9%83%E0%B8%9A%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B9%84%E0%B8%97%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99_%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%B0%E0%B8%8B%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B9%8C_2.1.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0s-UfAUmUZHB8ThfR6mncJrdbGPF1N1c4Q&s',
            'https://upload.wikimedia.org/wikipedia/th/a/a1/%E0%B9%83%E0%B8%9A%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%A2%E0%B8%99%E0%B8%95%E0%B8%A3%E0%B9%8C_%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B2%E0%B8%A2%E0%B8%94%E0%B8%B3.jpg',
            'https://cms.dmpcdn.com/dara/2023/02/11/c4588160-a9db-11ed-a430-3b590511d3ad_webp_original.jpg',
            'https://s359.kapook.com/rq/600/auto/50/pagebuilder/8bf93ce9-6bb6-47b9-b4c7-7c1018d2a672.jpg',
            'https://files.thaiware.site/movie/2024-07/images-poster/240724120411x98.jpg'
         ]}
         addToMyList={addToMyList}
      />

      <MovieRow
        title="อนิเมะยอดนิยม"
        images={[
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrTFLIwMwrnOaTu0110q4hMxERg5mWOki54w&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Jjjf7-AA0ZPolHMRSEmXOhCMmRdeib6qqA&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8u07g_ESCRVFuHAlofjKxU5Z4EeGGDoO6ag&s',
            'https://upload.wikimedia.org/wikipedia/en/6/6c/Solo_Leveling_Volume_1_Cover.jpg',
            'https://storage.naiin.com/system/application/bookstore/resource/product/202201/540412/1000246024_front_XXL.jpg',
            'https://www.metalbridges.com/wp-content/uploads/2016/05/My-Hero-Academia-poster.jpg',
            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPHBC2H2BfD9_WaJ6FSx0j7gCUhWCVBkV7myV0FjZxeLn8atHX',
            'https://upload.wikimedia.org/wikipedia/th/f/f4/Blue_Box%2C_volume_1_thai_version.jpg'
         ]}
         addToMyList={addToMyList}
      />


    </ScrollView>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  heroImage: {
    width: '100%',
    height: 420,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    overflow: 'hidden',
    justifyContent: 'flex-end'
  },

  heroOverlay: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)', // เงาดำจางๆ ให้ตัวหนังสือชัด
  },

  heroTitle: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  heroSubtitle: {
    color: '#fff',
    fontSize: 14,
    marginVertical: 10
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  playButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginRight: 10
  },

  playButtonText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 5
  },

  myListButton: {
    backgroundColor: '#333',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center'
  },

  myListText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5
  },

  section: { padding: 10 },

  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },

  movieCard: { marginRight: 10 },

  poster: {
    width: 110,
    height: 160,
    borderRadius: 4
  }
});