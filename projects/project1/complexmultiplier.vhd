----------------------------------------------------------------------------------
-- Company: Goodix Technology Inc.
-- Engineer: Hisham Elreedy
-- 
-- Create Date: 12/27/2020 07:25:40 PM
-- Design Name: Complex Multiplier
-- Module Name: complexmul - Behavioral
-- Project Name: 
-- Target Devices: 
-- Tool Versions: 
-- Description: 
-- 
-- Dependencies: 
-- 
-- Revision:
-- Revision 0.01 - File Created
-- Additional Comments:
-- 
----------------------------------------------------------------------------------


library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

-- Uncomment the following library declaration if using
-- arithmetic functions with Signed or Unsigned values
use IEEE.NUMERIC_STD.ALL;


entity ComplexMUL is
  Port ( 
  Ar : in STD_LOGIC_VECTOR (2 downto 0);
  Ai : in STD_LOGIC_VECTOR (2 downto 0);
  Br : in STD_LOGIC_VECTOR (2 downto 0);
  Bi : in STD_LOGIC_VECTOR (2 downto 0);

  Rr : out STD_LOGIC_VECTOR (6 downto 0);
  Ri : out STD_LOGIC_VECTOR (6 downto 0));
end ComplexMUL;

architecture Behavioral of ComplexMUL is


begin

Rr <= std_logic_vector( unsigned('0'&Ar)*unsigned(Br) - unsigned(Ai)*unsigned(Bi) );
Ri <= std_logic_vector( unsigned('0'&Ar)*unsigned(Bi) + unsigned(Ai)*unsigned(Br) );

end Behavioral;

