import { Phone } from 'lucide-react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.timerPill}>
        <Image source={require('../assets/home.png')} style={styles.home} />
        <Text style={styles.timerText}>02:52:56</Text>
      </View>

      <View style={styles.headerRight}>
        <TouchableOpacity>
          <Phone size={16} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/gift.gif')} style={styles.home} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerMenuDot} />
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  home: { width: 32, height: 32 },
  headerMenuDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#333',
    marginLeft: 8,
  },
  timerPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFECB3',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    gap: 6,
  },
  timerText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
