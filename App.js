import React from 'react';
import { SafeAreaView, ScrollView, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, SectionList } from 'react-native';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',

      dataList: [
        {
          id: 0,
          title: "Áo",
          data: [
            {
              id: 0,
              name: "Áo Marvel V1",
              img: 'https://product.hstatic.net/1000132959/product/screenshot_45_0b0d71c26db24d3ea69251fd67a452ed_master.jpg',
              address: 'Sản phẩm áo Marvel V1 : - Vải thun cao cấp mềm mại thoải mái.- Phối đồ vô cùng dễ dàng, thích hợp với nhiều loại trang phục khác nhau- Áo co giãn 4.'
            },
            {
              id: 1,
              name: "Áo Gucci Mickey",
              img: 'https://vidatuixachlouiskimmi.com/wp-content/uploads/2020/01/%C3%A1o-thun-nam-n%E1%BB%AF-mickey-gucci-h%C3%A0ng-hi%E1%BB%87u.jpg',
              address: 'Áo thun NEW 2020, Giới tính : Nam, Nữ, Thương hiệu : Gucci Mickey, Xuất xứ : Hong Kong, Màu sắc : Đen, ...'
            },
            {
              id: 2,
              name: "Áo thun loang",
              img: 'https://i-shop.vnecdn.net/resize/560/560/images/2020/06/22/5ef01c3307793-2.jpg',
              address: "Áo thun màu loang bán chạy nhất hè 2020, Tie Dye - Những items bán chạy nhất trong hè 2020, Cả nam nữ mặc đều mặc được hết nhé, Hàng về cực kỳ đẹp ..."
            },
          ]
        },
        {
          id: 1,
          title: "Quần",
          data: [
            {
              id: 0,
              name: "Quần thun ngắn Laluna",
              img: 'https://product.hstatic.net/1000227953/product/quan-thun-be-trai-ngan-laluna-b056033.jpg',
              address: 'Quần thun bé trai thương hiệu Laluna được sản xuất tại Việt Nam, được may bằng chất liệu cotton thấm hút mồ hôi, sẽ giúp bé thoải mái khi vận động. ...'
            },
            {
              id: 1,
              name: "Quần ngố Taro",
              img: 'https://storage.googleapis.com/cdn.nhanh.vn/store/2071/ps/20210718/51277383677_a6155b94c6_k.jpg',
              address: 'Quần ngố Taro chất vải mềm mại thoáng mát'
            },
            {
              id: 2,
              name: "Quần dài thể thao nam",
              img: 'https://storage.googleapis.com/cdn.nhanh.vn/store/13829/ps/20190724/qua____n_da__i_the_____thao_nam_bo_o____ng_ha__n_quo____c__Den__1.jpg',
              address: 'Thoáng mát và ôm body vừa vặn'
            }
          ]
        },
      ]

    }
  }

  onChangeText = (text) => {
    this.setState({ keyword: text })
  }

  renderSearch = () => {
    return (
      <View style={styles.search}>
        <View style={styles.wrapInput}>
          <TextInput
            style={styles.input}
            value={this.state.keyword}
            onChangeText={this.onChangeText}
            placeholder="Nhập thông tin tìm kiếm ..." />
        </View>
      </View>
    )
  }

  renderItem = (ele) => {
    const item = ele.item;
    const inex = ele.index;
    return (
      <TouchableOpacity style={styles.item}>
        <View>
          <Image source={{ uri: item.img }} resizeMode="contain" style={{ width: 100, height: 100 }} />
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <Text style={{ fontSize: 14, }}>{item.name}</Text>
          <View style={{ flex: 1, marginTop: 6 }}>
            <Text numberOfLines={4} style={{ color: '#9F9F9F', fontSize: 12 }}>{item.address}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const { dataList } = this.state;
    return (
      <SafeAreaView style={styles.container} >
        <View style={{ marginHorizontal: 16, marginTop: 10 }}>
          {this.renderSearch()}
          {/* <ScrollView>
            {
              dataList.map((e, i) => {
                return (
                  <View key={`${e.id}`}>
                    <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
                      <Text style={{ color: '#008080', paddingVertical: 8, fontSize: 16, fontWeight: 'bold' }}>{e.title}</Text>
                    </View>
                    <FlatList
                      scrollEnabled={false}
                      data={e.data}
                      renderItem={this.renderItem}
                      keyExtractor={item => `${item.id}`}
                    />
                  </View>
                )
              })
            }
          </ScrollView> */}

          <SectionList
            showsVerticalScrollIndicator={false}
            sections={dataList}
            keyExtractor={item => `${item.id}`}
            renderItem={this.renderItem}
            renderSectionHeader={({ section }) => {
              return (
                <View style={{ marginVertical: 8, marginHorizontal: 16 }}>
                  <Text style={{ color: '#008080', paddingVertical: 8, fontSize: 16, fontWeight: 'bold' }}>{section.title}</Text>
                </View>
              )
            }}
            stickySectionHeadersEnabled={false}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  search: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    // margin: 8,
    elevation: 3,
  },
  wrapInput: {
    flex: 1, marginLeft: 4
  },
  input: {
    height: 40, padding: 0, margin: 0
  },
  item: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 3,
    flexDirection: 'row', backgroundColor: 'white', padding: 8
  }
});

export default App;
