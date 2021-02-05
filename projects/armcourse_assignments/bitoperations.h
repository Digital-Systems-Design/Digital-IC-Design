typedef float float32;
typedef double float64;

#define set_bit(register, bit_number)	(register |= (1 << bit_number))
#define clr_bit(register, bit_number)	(register &= ~(1 << bit_number))
#define get_bit(register, bit_number)	((register >> bit_number)&0x1)

/*formula to compute the addresses for alias regions*/
/*bit_band_address = alias_region_base + (region_base_offset X 32) + (bit_number X 4)*/
#define BITBAND_BASE									(0x20000000U)
#define BITBAND_ALIAS_BASE								(0x22000000U)
#define BITBAND_ALIAS_ADDRESS(Register, Bit_Number)		((BITBAND_ALIAS_BASE + ((